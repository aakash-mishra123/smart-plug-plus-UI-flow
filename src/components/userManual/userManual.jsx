import { GoPulse } from "react-icons/go";
const UserManual = () => {
  return (
    <div className="d-flex flex-col gap-2">
      <div className="headingBox align-items-center">
        <div className="d-flex flex-row gap-2 align-items-center">
          <GoPulse className="fw-bold fs-4" style={{ color: "#173782" }} />
          <h1
            className="fw-medium fs-5 fw-bold text-primary"
            style={{ color: "#173782" }}
          >
            TESTIMONIALS
          </h1>
        </div>
        <h1 className="fw-bold fs-5 ">WHAT OUR CLIENTS SAY</h1>
      </div>
    </div>
  );
};

export default UserManual;
