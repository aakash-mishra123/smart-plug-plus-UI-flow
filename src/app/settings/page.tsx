"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Transitions from "@/components/animations/Transition";

const Temp = () => {
    const router = useRouter();
    const [show, setShow] = useState(true);

    const handleBack = () => {
        setShow(false); // Start exit transition
        setTimeout(() => {
            router.back(); // Navigate after transition ends
        }, 50); // Ensure this matches the exit timeout
    };

    return (
        <Transitions 
            type="slide" 
            direction="left" 
            in={show} 
            timeout={{ appear: 0, enter: 100, exit: 100 }}
            >
            <div className="w-25 h-25" onClick={handleBack}>
                <h1 className="text-2xl font-bold">Settings Page</h1>
            </div>
        </Transitions>
    );
};

export default Temp;
