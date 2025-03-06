"use client";

import { RiArrowRightSLine } from "@remixicon/react";

const data = [
    {
        title: "faq1",
        content: "Come funzionano le fasce di consumo?"
    },
    {
        title: "faq2",
        content: "Cosa vuol dire se luce x fa cosa y?"
    },
    {
        title: "faq3",
        content: "Lorem ipsum dolor sit amet elit?"
    },
    {
        title: "faq4",
        content: " Cosa vuol dire se luce x fa cosa y?"
    }
]

export default function FAQ() {

    return (
        <section className="p-4 space-y-4 h-full">
            {/* Top heading */}
            <h1 className="text-2xl font-semibold">FAQ</h1>

            <div className="flex flex-col flex-grow justify-between">
                {/* Card #1 */}
                {data?.map((item, index) => (
                    <div 
                        className="flex items-center justify-between p-4  group cursor-pointer hover:bg-gray-50"
                        key={index}
                        >
                        <div>
                            <p className="text-sm text-gray-600">
                                {item.content}
                            </p>
                        </div>
                        <RiArrowRightSLine
                            className="h-5 w-5 min-w-5 min-h-5 text-gray-400 transition-transform group-hover:translate-x-1"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
