import React from "react";
import image1 from "../images/sellit.gif"
import image2 from "../images/kromaki.jpg"



export default function Twobanner() {
    return (
        <div className="two-banner d-flex flex-row justify-content-between ">

            <div className=" two-banner-card">
                <a href="https://www.digikala.com/">
                    <img className="two-banner-card-img" src={image1} />
                </a>

            </div>
            <div className="two-banner-card margintop">
                <a href="https://www.digikala.com/" >
                    <img className="two-banner-card-img" src={image2} />
                </a>

            </div>



        </div>









    )



}