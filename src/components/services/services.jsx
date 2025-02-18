import "./services.css";
import { useState } from "react";
import { serviceHeadings, servicesData } from "../../utils/constants";
import { GoPulse } from "react-icons/go";
import { Button } from "react-bootstrap";

const Services = () => {

    //const item = servicesData[0];
    const [ selectedIndex, setSelectedIndex ] = useState(0);
    const item = servicesData[selectedIndex];

    const btnHandler = () => {
        console.log('//');
    }

  return (
    <div className="servicesBox h-100 py-3 px-5">
      <div className="w-full d-flex gap-2 justify-content-evenly px-4 ">
        {serviceHeadings.map((item, index) => (
          <div 
            key={index}
            onClick={() => setSelectedIndex(index)}     
            className={`p-2 px-4 fw-bold ${selectedIndex === index ? 'activeHeading' : 'headingDiv'}`}
            >
            <h2 className="fs-6 ">{item}</h2>
          </div>
        ))}
      </div>
        
      <div className="d-flex flex-column rounded-md p-4 h-70 mt-4 bg-white text-primary px-4 serviceCard">
          <div className="d-flex flex-row gap-2">
            <GoPulse className="fw-bold fs-4" style={{ color: "#173782" }} />
            <h1
              className="fw-bold fs-6"
              style={{ color: "#173782" }}
            >
              OUR SERVICES
            </h1>
          </div>
            
          <div className="d-flex flex-column text-start mt-2 gap-2">
            <h2 className="fs-4 text-black">{item.title}</h2>
            <p className="fs-6 fw-light text-black">{item.features}</p>

            <ul className="fw-light">
                {
                    item.features.map((feature) => 
                        <li><h1 className="text-black fs-6 fw-medium">{feature}</h1></li>
                    )
                }
            </ul>

          </div>

          <div className="d-flex flex-row gap-4 w-100 fs-bold">
            <Button variant="outline-primary" className="w-50 btn-active" onClick={btnHandler}>
                    <p className="fs-6 m-0 p-0 px-2 fw-medium">{item.buttons.know_more}</p>
            </Button>
            <Button variant="primary" className="text-white w-50" style={{ backgroundColor: "#173782", borderColor: "#173782"}}><p className="fs-6 m-0 p-0 px-2">{item.buttons.book}</p></Button>
          </div>

        </div>

    </div>
  );
};

export default Services;
