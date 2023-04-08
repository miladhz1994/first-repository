import React from "react";
import image1 from "../images/phone1.jpg";
import image2 from "../images/phone2.jpg";
import image3 from "../images/phone3.jpg";
import image4 from "../images/phone4.jpg";
import image5 from "../images/phone5.jpg";
import image6 from "../images/phone6.jpg";
import image7 from "../images/phone7.jpg";
import image8 from "../images/phone8.jpg";
import image9 from "../images/phone9.jpg";
import image10 from "../images/phone10.jpg";
import image11 from "../images/phone11.jpg";
import image12 from "../images/phone12.jpg";
import image13 from "../images/phone13.jpg";
import image14 from "../images/phone14.jpg";
import image15 from "../images/phone15.jpg";
import image16 from "../images/phone16.jpg";




export default function Foursection() {


    const images = [
        { section1: image1, section2: image5, section3: image9, section4: image13, title: " گوشی موبایل" },
        { section1: image2, section2: image6, section3: image10, section4: image14, title: " کیف وکاور گوشی" },
        { section1: image3, section2: image7, section3: image11, section4: image15, title: " هدفون هدست و هندسفری" },
        { section1: image4, section2: image8, section3: image12, section4: image16, title: "ساعت هوشمند" },
    ]
    const action = images.map(
        ele => {
            return (
                <div className="foursection-card col-3">
                    <div className="foursection-card-header">
                        <h2 className="font16"> {ele.title} </h2>
                        <p className="nav-text">بر اساس بازدیدهای شما</p>

                    </div>
                    <div className="foursection-card-body ">

                        <div className="foursection-card-body-post border-top-0 border-end-0" >
                            <a href="#"> <img className="foursection-card-body-img" src={ele.section1} /></a>
                        </div>
                        <div className="foursection-card-body-post border-top-0 border-start-0" >
                            <a href="#"> <img className="foursection-card-body-img" src={ele.section2} /></a>
                        </div>
                        <div className="foursection-card-body-post border-bottom-0 border-end-0" >
                            <a href="#"> <img className="foursection-card-body-img" src={ele.section3} /></a>
                        </div>
                        <div className="foursection-card-body-post  border-bottom-0 border-start-0" >
                            <a href="#"> <img className="foursection-card-body-img" src={ele.section4} /></a>
                        </div>

                    </div>
                    <div className="foursection-card-footer mt-3">

                        <a href="#" className="more-a">

                            مشاهده همه<i className="fa-solid fa-chevron-left "> </i>

                        </a>


                    </div>


                </div>

            )

        }
    )

    return (
        <div className="foursection row ">

            {action}

        </div>
    )

}