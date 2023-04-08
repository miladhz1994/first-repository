import React from "react";
import image1 from "../images/flower.jpg";
import image5 from "../images/toy.jpg";
import image9 from "../images/sink.jpg";
import image13 from "../images/calculator.jpg";
import image2 from "../images/shoe-black.jpg";
import image6 from "../images/shoegray.jpg";
import image10 from "../images/nike-shoe.jpg";
import image14 from "../images/nike-shoe2.jpg";
import image3 from "../images/notebook.jpg";
import image7 from "../images/notebook2.jpg";
import image11 from "../images/asus.jpg";
import image15 from "../images/lenovo.jpg";
import image4 from "../images/toycar-blue.jpg";
import image8 from "../images/police-car.jpg";
import image12 from "../images/black-car.jpg";
import image16 from "../images/batman-car.jpg";





export default function Foursection2() {

    const images = [
        { section1: image1, section2: image5, section3: image9, section4: image13, title: "  آشنایی با فنون " },
        { section1: image2, section2: image6, section3: image10, section4: image14, title: "   کفش ورزشی مردانه" },
        { section1: image3, section2: image7, section3: image11, section4: image15, title: " لپ تاپ و الترابوک " },
        { section1: image4, section2: image8, section3: image12, section4: image16, title: " ماشین " },
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
                            <a href="#" className="more-a">
                                <img className="foursection-card-body-img" src={ele.section1} />
                            </a>

                        </div>
                        <div className="foursection-card-body-post border-top-0 border-start-0" >
                            <a href="#" className="more-a">
                                <img className="foursection-card-body-img" src={ele.section2} />
                            </a>
                        </div>
                        <div className="foursection-card-body-post border-bottom-0 border-end-0" >
                            <a href="#" className="more-a">
                                <img className="foursection-card-body-img" src={ele.section3} />
                            </a>
                        </div>
                        <div className="foursection-card-body-post  border-bottom-0 border-start-0" >
                            <a href="#" className="more-a">
                                <img className="foursection-card-body-img" src={ele.section4} />
                            </a>
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