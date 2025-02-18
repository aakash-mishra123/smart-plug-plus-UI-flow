import './statsCarousel.css';
import { statsDummyData } from '../../utils/constants';
import { Image } from 'react-bootstrap';
import { GoPulse } from "react-icons/go";

const StatsCarousel = () => {
    return (
        <>
            <div className="root">
                <div className="headingBox mb-4 align-items-center">
                    <div className="d-flex flex-row gap-2 align-items-center" style={{ color: "#173782"}}>
                        <GoPulse className="fw-bold fs-6"/>
                        <h1 className="fs-6 fw-bold">STATS</h1>
                    </div>
                    <h1 className="fw-bold fs-5 ">TVS CARE ADVANTAGES</h1>

                </div>
                    <div className="d-flex flex-row w-full justify-content-between px-5 gap-4">
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