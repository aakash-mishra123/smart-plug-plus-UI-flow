import './statsCarousel.css';
import { statsDummyData } from '../../utils/constants';
import { Image } from 'react-bootstrap';
import { GoPulse } from "react-icons/go";

const StatsCarousel = () => {
    return (
        <>
            <div className="root">
                <div className="headingBox mb-4 align-items-center">
                    <div className="d-flex flex-row gap-2 align-items-center">
                        <GoPulse className="fw-bold fs-4" style={{ color: "#173782"}}/>
                        <h1 className="fw-medium fs-5 fw-bold text-primary" style={{ color: "#173782"}}>STATS</h1>
                    </div>
                    <h1 className="fw-bold fs-5 ">TVS CARE ADVANTAGES</h1>

                </div>
                    <div className="d-flex flex-row w-full justify-content-between px-4 mt-4 gap-1">
                        {
                            statsDummyData.map((item) => 
                                <div className="d-flex flex-column gap-0 align-items-start">
                                    <Image 
                                        src={item.image}
                                        thumbnail
                                        className="w-80 h-80"
                                        alt="stat_icon"
                                        />

                                    <div className="d-flex flex-column gap-1 pt-2 align-items-start text-start">
                                        <h1 className="fs-4 fw-bold"  style={{ color: "#173782" }}>{item.subtitle}</h1>
                                        <h5 className="fs-6 pt-2">{item.title}</h5>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>  
        </>
    )
}

export default StatsCarousel;