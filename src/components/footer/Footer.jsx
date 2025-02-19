import { Image } from "react-bootstrap";
import tvsLogo from "../../assets/logo.png";
import { footerDummyData } from "../../utils/constants";
import socialMedia from '../../assets/banner/social-media.png';

import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="d-flex flex-column gap-0 w-100">
        <div
          className="d-flex flex-row ml-4 h-50 justify-content-between footerMenu"
          style={{ backgroundColor: "#f7fbff" }}
        >
          <div className="d-flex flex-column align-items-start">
            <Image src={tvsLogo} className="w-50 h-50" />
            <div className="d-flex flex-column w-75 gap-1 mt-3 text-start">
              <p className="fs-6 fw-bold ">Address</p>
              <p className="fw-medium" style={{ fontSize: "12px" }}>
                Future Accesories LLP, Plot no 21 & 22, Sipcot Industrial
                Complex, Phase-1, Tamil Nadu Hosur-635126
              </p>
            </div>
          </div>

          <div className="d-flex flex-column gap-2 text-start">
            <h5 className="fw-bold fs-6">Company</h5>
            {footerDummyData.companyRow.map((item) => (
              <p className="fw-light m-0 p-0" style={{ fontSize: "12px" }}>
                {item}
              </p>
            ))}
          </div>

          <div className="d-flex flex-column gap-2 text-start">
            <h5 className="fw-bold fs-6">Careers</h5>
            {footerDummyData.shopRow.map((item) => (
              <p className="fw-light m-0 p-0" style={{ fontSize: "12px" }}>
                {item}
              </p>
            ))}
          </div>

          <div className="d-flex flex-column gap-0 text-start">
            <p className="fw-bold fs-6 p-0 m-0">
              Get in Touch For Consumer Complaints <br />
              Regarding Accesories & Merchandise Shop
            </p>

            <p className="fw-bold mt-4">{`1800-258-7555 (Toll Free ) `}</p>
            <p className="fw-medium fs-6">acc.onlineSupport@tvsmotor.com</p>
          </div>
        </div>
        <hr className="m-0 p-0" />
        <div class="px-4 fs-6 d-flex flex-row gap-4 mb-1 justify-content-between w-full align-items-end">
            <p class="mb-0 fw-medium mb-1" style={{ fontSize: '14px'}}>© 2024 TVS Motor Company. All rights reserved.</p>
            <div className="d-flex flex-row gap-4 text-black mb-1" style={{ fontSize: '12px'}}>
              <a href="#">Privacy Policy</a>
              <a href="#">Return Policy</a>
              <a href="#">Disclaimer</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>

          <Image 
            src={socialMedia}
            style={{ width: "240px" , height: "50px"}}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
