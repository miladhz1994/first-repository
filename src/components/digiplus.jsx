import React from "react";
import image1 from "../images/digiplus-logo.svg";
import image2 from "../images/tomato.jpg";
import image3 from "../images/oil-ladan.jpg";
import image4 from "../images/cheese.jpg";
import image5 from "../images/zar-makaron.jpg";
import image6 from "../images/oil.jpg";
import image7 from "../images/poshak.jpg";
import image8 from "../images/airpod-pinc.jpg";
import image9 from "../images/airpod-black.jpg";
import image10 from "../images/phone2.jpg";
import image11 from "../images/airpod.jpg";
import image12 from "../images/phone3.jpg";
import image13 from "../images/pen.jpg";





export default function Digiplus() {


    const infos = [

        { img: image2 },
        { img: image3 },
        { img: image4 },
        { img: image5 },
        { img: image6 },
        { img: image7 },

    ]
    const infos2 = [

        { img: image8 },
        { img: image9 },
        { img: image10 },
        { img: image11 },
        { img: image12 },
        { img: image13 },

    ]

    const act = infos.map(ele => {
        return (
            <div className="digiplus-midlle-down-card">
                <div >
                    <a href="#" className="more-a">
                        <img className="w-100 h-100 digiplus-midlle-down-card-img" src={ele.img} />
                        <p className="digiplus-midlle-down-card-p m-0 ">1000 تومان هدیه</p>
                    </a>

                </div>


            </div>

        )


    })

    const act2 = infos2.map(elem => {
        return (
            <div className="digiplus-midlle-down-card">
                <div>
                    <a href="#" className="more-a">
                        <img className="w-100 h-100 digiplus-midlle-down-card-img" src={elem.img} />

                    </a>


                </div>


            </div>

        )


    })

    return (

        <div className="digiplus row">
            <div className=" digiplus-right">
                <div className="digiplus-right-logo">
                    <img src={image1} />
                    <p className="mt-1 ">خدمات ویژه برای اعضای دیجی پلاس</p>
                </div>
                <div className="d-block">
                    <a href="https://www.digikala.com/" className="membership">  عضویت <i className="fa-solid fa-arrow-left"></i></a>
                </div>

            </div>
            <div className="  digiplus-midlle ">
                <div className="d-flex flex-row justify-content-between mt-3" >
                    <div>

                        <p> <i className="fa-solid fa-arrow-rotate-left ms-1"></i> هدیه نقدی </p>

                    </div>
                    <div >
                        <a href="https://www.digikala.com/" className="digiplus-midlle-a"> مشاهده همه  <i className="fa-solid fa-chevron-left"></i>   </a>

                    </div>

                </div>
                <div className="digiplus-midlle-down">
                    {act}

                </div>





            </div>

            <div className="  digiplus-left ">
                <div className="d-flex flex-row justify-content-between mt-3" >
                    <div>

                        <p> <i className="fa-reqular fa-rocket-launch" ></i> ارسال فوری </p>

                    </div>
                    <div >
                        <a href="https://www.digikala.com/" className="digiplus-left-a"> مشاهده همه  <i className="fa-solid fa-chevron-left"></i>   </a>

                    </div>

                </div>
                <div className="digiplus-midlle-down">
                    {act2}

                </div>





            </div>




        </div>




    )
}