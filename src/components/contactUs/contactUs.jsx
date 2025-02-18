import { Button, Form } from "react-bootstrap";
import "./contactUs.css";
const ContactUs = () => {
  return (
    <div className="contactUsBanner d-flex flex-row justify-content-between align-items-center">
      <div className="d-flex flex-column textBox">
        <p className="fs-light fs-5 " style={{ color: "red" }}>
          Your Life, Your Rules
        </p>
        <div className="d-flex flex-column gap-1 text-white">
          <h1 className="fs-1 fw-bold">Download the App</h1>
          <h1 className="fs-1 fw-bold">TVS Connect App Today</h1>
        </div>
        <div>
          <p className="fw-light text-white fs-6">
            Sem nulla dignissim arcu semper tempus turpis. Amet risus id nunc
            augue. Suscipit dictum mauris sed nulla. Amet mi elit donec id et
            diam.{" "}
          </p>
        </div>
      </div>
      <div className="d-flex flex-column gap- bg-white p-4 contactUsCard">
        <p className="fs-5 fw-bold">HOW CAN WE HELP?</p>

        <Form className="px-2">
        <Form.Group className="mb-3 fs-4" controlId="formBasicEmail">
            <Form.Control type="name" className="fs-6 fw-light p-2 px-2" placeholder="YOUR NAME" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="phone" className="fs-6 fw-light p-2 px-2" placeholder="PHONE NUMBER" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="email" className="fs-6 fw-light p-2 px-2" placeholder="EMAIL ADDRESS" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control as="textarea" placeholder="YOUR ISSUE" type="description" className="w-100 h-80 fw-light fs-6 p-2 px-2" />
          </Form.Group>
          
          <Button variant="primary" type="submit" className="w-100 rounded-sm py-3 " style={{ backgroundColor: "#173782"}}>
            SUBMIT
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
