import { Image } from "react-bootstrap";
import mobileImage from "../../assets/banner/image 23974.png";
import appBadge from "../../assets/banner/Badge.png";

import "./appBanner.css";

const AppBanner = () => {
  return (
    <div className="banner w-100 bg-blue d-flex flex-row gap-4 align-items-center justify-content-evenly">
    <div className="d-flex flex-column gap-4 align-items-center">
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

       <Image src={appBadge} className="w-70 h-50" /> 

      </div>
      <Image src={mobileImage} className="bannerImage" />
    </div>
  );
};

export default AppBanner;
