import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import './Accordion.css';

const CustomAccordion = ({ id, title, content, customStyles }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
        key={id}
        className="w-100 border border-white bg-white mt-2 shadow-sm mt-1 py-2"
        style={{ borderRadius: '8px'}}
    >
        <Button
          className="accordion-button p-2 px-4 border-0"
          onClick={() => setIsExpanded(!isExpanded)}
        >
            <p className="fs-6 p-0 m-0 fw-medium w-100">{title}</p>
          <IoIosArrowDown 
                className="fs-4"
                style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "1s"}}
            />
        </Button>
      <div className={`collapse ${isExpanded ? "show" : ""}`} style={{ transition: "height 0.3s ease" }}>
        <div    
          className="accordion-body p-4 bg-white"
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default CustomAccordion;
