// import Accordion from "react-bootstrap/Accordion";
import { GoPulse } from "react-icons/go";
import { FAQdata } from "../../utils/constants";
import CustomAccordion from "../../shared/Accordion/Accordion";
import './FAQ.css';

const FAQ = () => {
  return (
    <>
      <div className="root">
        <div className="headingBox align-items-center">
          <div
            className="d-flex flex-row gap-2 align-items-center"
            style={{ color: "#173782" }}
          >
            <GoPulse className="fw-bold fs-6" />
            <h1 className="fs-6 fw-bold">FAQs</h1>
          </div>
          <h1 className="fw-bold fs-3 ">FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <div className="d-flex flex-column gap-2 px-5">
          {FAQdata.map((item, index) => (
            <CustomAccordion
              title={item.title}
              content={item.answer}
              id={item.id}
            />
          ))}
        </div>

        {/* <Accordion>
         {
          FAQdata.map((item) => {
            return (
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header
                  className="border-none shadow-sm rounded-lg"
                >{item.title}</Accordion.Header>
                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            )
          })         
        }
        </Accordion> */}
      </div>
    </>
  );
};

export default FAQ;
