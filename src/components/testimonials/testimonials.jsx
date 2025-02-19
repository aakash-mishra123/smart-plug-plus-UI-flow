import { GoPulse } from "react-icons/go";
import { reviewsData } from "../../utils/constants";
import { ImQuotesLeft } from "react-icons/im";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel3";

import "./testimonials.css";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials_root">
        <div className="headingBox align-items-center">
          <div className="d-flex flex-row gap-2 align-items-center mb-1" style={{ color: "#173782" }}>
            <GoPulse className="fw-bold fs-6"  />
            <h1 className="fs-6 fw-bold"> TESTIMONIALS</h1>
          </div>
          <h1 className="fw-bold fs-5 m-0 p-0 ">WHAT OUR CLIENTS SAY</h1>
        </div>
        {/* <div className="w-80 reviewsBox h-50 mt-4 flex-wrap gap-8 overflow-y-none overflow-x-scroll overflow-hidden "> */}
        <OwlCarousel
          className="owl-theme"
          items={5}
          margin={5}
          loop={true}
          nav={true}
          dots={true}
          navText={["⬅", "➡"]}
          autoplay={true}
          smartspeed={500}
          autoplayTimeout={2000}
          navElement="arrows"
          responsive={{
            0: {
              items: 1
            },
            450: {
              items: 2
            },
            600: {
              items: 3
            },
            1000: {
              items: 3
            }
          }}
        >
          {reviewsData.map((item) => {
            return (
              <>
                <div className="reviewCard p-4 mx-2 mt-4 d-flex flex-column position-relative align-items-center">
                  <div className="d-flex flex-row gap-2 align-items-baseline" style={{ color: "#173782"}}>
                    <ImQuotesLeft className="fs-4 " />
                    <h2 className="fs-6 fw-bold">{item.title}</h2>
                  </div>
                  <p className="text-black flex-grow-1 fs-6 ">
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

// export default Testimonials;

// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import OwlCarousel from "react-owl-carousel3";

// const options = {
//   loop: true,
//   margin: 10,
//   nav: true,
//   responsive: {
//     0: { items: 1 },
//     600: { items: 2 },
//     1000: { items: 3 }
//   }
// };

// const Testimonials = () => (
//   <OwlCarousel className="owl-theme" {...options}>
//     <div className="item"><h4>1</h4></div>
//     <div className="item"><h4>2</h4></div>
//     <div className="item"><h4>3</h4></div>
//     <div className="item"><h4>1</h4></div>
//     <div className="item"><h4>2</h4></div>
//     <div className="item"><h4>3</h4></div>
//     <div className="item"><h4>1</h4></div>
//     <div className="item"><h4>2</h4></div>
//     <div className="item"><h4>3</h4></div>
//   </OwlCarousel>
// );

// export default Testimonials;
