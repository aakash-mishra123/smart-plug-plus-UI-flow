import { GoPulse } from "react-icons/go";
import { reviewsData } from "../../utils/constants";
import { ImQuotesLeft } from "react-icons/im";
import OwlCarousel from "react-owl-carousel";
// import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <>
      <div className="root">
        <div className="headingBox align-items-center">
          <div className="d-flex flex-row gap-2 align-items-center" style={{ color: "#173782" }}>
            <GoPulse className="fw-bold fs-6"  />
            <h1 className="fs-6 fw-bold"> TESTIMONIALS</h1>
          </div>
          <h1 className="fw-bold fs-5 ">WHAT OUR CLIENTS SAY</h1>
        </div>
        {/* <div className="w-80 reviewsBox h-50 mt-4 flex-wrap gap-8 overflow-y-none overflow-x-scroll overflow-hidden "> */}
        <OwlCarousel
          className="owl-theme"
          loop
          margin={20}
          nav
          navText={["⬅", "➡"]}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
          }}
        >
          {reviewsData.map((item) => {
            return (
              <>
                <div className="reviewCard p-2 mx-2 d-flex flex-column position-relative">
                  <div className="flex flex-row gap-2">
                    <ImQuotesLeft className="fs-6 text-black font-lg " />
                    <h2 className="fs-6 fw-medium">{item.title}</h2>
                  </div>
                  <p className="text-black flex-grow-1 ">
                    {item.description.slice(0, 150)}
                  </p>

                  <div className="authorBox position-absolute bottom-0 w-100">
                    <div className="flex flex-row gap-2">
                      <h6 className="fs-6 text-blue">{item.author_name}</h6>
                      <h6 className="fs-6 text-black">{item.author_address}</h6>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </OwlCarousel>
        {/* </div> */}
      </div>
    </>
  );
};

export default Testimonials;
