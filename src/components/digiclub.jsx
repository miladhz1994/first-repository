import React from "react";
import image1 from "../images/Digiclub.svg";
import image2 from "../images/gamble.jpg";
import image3 from "../images/missions.png";
import image4 from "../images/awards.png";



export default function Digiclub() {



    return (
        <div className="digiclub d-flex flex-row justify-content-between ">
            <div className="pt-3 pe-4">
                <img className="digiclub-img" src={image1} />

            </div>
            <div className="digiclub-left">
                <div className="digiclub-left-sec">

                    <div className="pt-3 chance-text">

                        <a href="#" className="more-a">
                            <span className="chance-span">  <li className="fa-solid fa-dice-four ms-2 chance-icon"> </li> چرخ و بخت </span>

                        </a>


                    </div>
                    <div>
                        <a href="#">
                            <img className="digiclub-left-sec-img" src={image2} />
                        </a>

                    </div>

                </div>
                <div className="digiclub-left-sec">

                    <div className="pt-3 chance-text">
                        <a href="#" className="more-a">
                            <span className="chance-span">  <li className="fa-solid fa-bullseye ms-2 chance-icon"> </li> ماموریت ها </span>

                        </a>

                    </div>
                    <div>
                        <a href="#" className="more-a">
                        <img className="digiclub-left-sec-img" src={image3} />
                        </a>
                       
                    </div>

                </div>
                <div className="digiclub-left-sec">

                    <div className="pt-3 chance-text">
                        <a href="#" className="more-a">
                        <span className="chance-span">  <li className="fa-solid fa-award ms-2 chance-icon"> </li> جایزه ها </span>

                        </a>
                      
                    </div>
                    <div>
                        <a href="#" className="more-a">
                        <img className="digiclub-left-sec-img" src={image4} />
                        </a>
                        
                    </div>

                </div>




            </div>

        </div>

    )
}