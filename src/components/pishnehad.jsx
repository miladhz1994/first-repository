import React from "react";
import image1 from "../images/redmi.jpg";
import image2 from "../images/smartwatch.jpg";
import image3 from "../images/tablet.jpg";
import image4 from "../images/goldan.jpg";
import image5 from "../images/miband.jpg";
import image6 from "../images/shoe.jpg";
import image7 from "../images/sucks.jpg";
import image8 from "../images/airpod2.jpg";
import image9 from "../images/laptop.jpg";
import image10 from "../images/gameconsole.jpg";
import image11 from "../images/motorbike.jpg";
import image12 from "../images/sportshoes.jpg";
import image13 from "../images/sportshirt.jpg";
import image14 from "../images/speaker.jpg";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";





export default function Pishnehad() {


    const infos = [
        { img1: image1, title1: "گوشی موبایل", img2: image2, title2: "ساعت هوشمند" },
          
        { img1: image3, title1: " تبلت ", img2: image4, title2: " آشنایی با فنون" },

        { img1: image5, title1: " مچ بند هوشمند", img2: image6, title2: " کفش ورزشی زنانه" },

        { img1: image7, title1: " جوراب مردانه ", img2: image8, title2: " هدفون هدست و ..." },

        { img1: image9, title1: "لپ تاپ والکترابوک ", img2: image10, title2: " کنسول خانگی" },

        { img1: image11, title1: " موتور سیکلت", img2: image12, title2: " کفش ورزشی مردانه" },

        { img1: image13, title1: " هودی مردانه", img2: image14, title2: " اسپیکر(بلندگو)" },


    ]
    const settings = {

        className: "center",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 7,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    }

    const fun = infos.map(ele => {
        return (
            <div className="d-flex flex-column big-div ">

                <div className=" pishnehad-card d-flex flex-column ">
                    <a className="pishnehad-card-a" href="https://www.digikala.com/">
                        <div className="pishnehad-card-img-div" >

                            <img className="pishnehad-card-img" src={ele.img1} />

                        </div>
                        <div>
                            <p> {ele.title1}</p>
                        </div>
                    </a>

                </div>
                <div className=" pishnehad-card d-flex flex-column ">
                    <a className="pishnehad-card-a" href="https://www.digikala.com/">
                        <div className="pishnehad-card-img-div" >

                            <img className="pishnehad-card-img" src={ele.img2} />

                        </div>
                        <div>
                            <p> {ele.title2}</p>
                        </div>
                    </a>

                </div>





            </div>
        )

    }



    )

    return (
        <div className="pishnehad mt-5">
            <div className="pishnehad-header">
                <p>پیشنهاد دیجی کالا</p>

            </div>
            <div className=" pishnehad-body ">
                <Slider className="slid pishnehad-slider" {...settings}>

                    {fun}

                </Slider>

            </div>


        </div>




    )
}