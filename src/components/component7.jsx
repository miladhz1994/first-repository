import React from "react";
import image1 from "../images/takhfif.jpg"
import image2 from "../images/zafrshoei.jpg"
import image3 from "../images/shoes.jpg"
import image4 from "../images/lavazem-tahrir.jpg"


export default function Baner() {

    return (
        <div className="baners row mt-4 ">

            <div className="col-3 baners-card pe-0">
                <a href="#"><img className="baners-img m-0" alt="1" src={image1}/></a>

            </div>
            <div className="col-3 baners-card pe-0">
                <a href="#"><img className="baners-img m-0" alt="2" src={image2}/></a>

            </div>
            <div className="col-3 baners-card pe-2 ps-1  ">
                <a  href="#"><img className="baners-img m-0" alt="3" src={image3}/></a>

            </div>
            <div className="col-3 baners-card ps-0">
                <a href="#"><img className="baners-img m-0" alt="4" src={image4}/></a>

            </div>

        </div>

    )
}