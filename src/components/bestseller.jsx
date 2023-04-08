import React, { Component } from "react";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../images/pen.jpg";
import image2 from "../images/airpod-pinc.jpg";
import image3 from "../images/cheese.jpg";
import image4 from "../images/phone1.jpg";
import image5 from "../images/oil.jpg";
import image6 from "../images/airpod-black.jpg";
import image7 from "../images/zar-makaron.jpg";
import image8 from "../images/oil-ladan.jpg";
import image9 from "../images/tomato.jpg";
import image10 from "../images/spagety.jpg";
import image11 from "../images/phone2.jpg";
import image12 from "../images/mineral-water.jpg";
import image13 from "../images/makeup-pad.jpg";
import image14 from "../images/airpod.jpg";
import image15 from "../images/airpod2.jpg";
import image16 from "../images/infant-care.jpg";
import image17 from "../images/fish-bottle.jpg";
import image18 from "../images/seed-can.jpg";


export default class Bestseller extends Component {
    render() {
        const settings = {
            className: "center",
            infinite: false,
            centerPadding: "60px",
            slidesToShow: 4,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
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
            afterChange: function (index) {
                console.log(
                    `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                );
            }
        };

        const info = [
            {
                img1: image1, number1: 1, text1: "خودکار پنتر مدل فوق روان نانو آنتی باکتریال کد DP-105-1 ",
                img2: image2, number2: 2, text2: "هندزفری بلوتوثی مدل  inpods 12 ",
                img3: image3, number3: 3, text3: "پنیر فتا دوشه هراز- 400 گرم",
            }
            ,
            {
                img1: image4, number1: 4, text1: "گوشی موبایل شیائومی مدل Redmi Note 11 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
                img2: image5, number2: 5, text2: "روغن آفتابگردان حاوی توکوفرول غنچه پلاس - 900 میلی لیتر",
                img3: image6, number3: 6, text3: "هدفون بی سیم مدل BTH-F9-5"
            }
            ,
            {
                img1: image7, number1: 7, text1: " اسپاگتی قطر 1.2 زر ماکارون مقدار 700 گرم",
                img2: image8, number2: 8, text2: " روغن نیمه جامد لادن - 5 کیلوگرم ",
                img3: image9, number3: 9, text3: " رب گوجه فرنگی چین چین - 800 گرم "
            }
            ,
            {
                img1: image10, number1: 10, text1: " ماکارونی پیکولی زر ماکارون مقدار 500 گرم",
                img2: image11, number2: 11, text2: " گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
                img3: image12, number3: 12, text3: " آب معدنی میوا - 1.5 لیتر بسته 6 عددی	 "
            }
            ,
            {
                img1: image13, number1: 13, text1: " پد آرایش پاک کن ایپک مدل 01 بسته 70 عددی ",
                img2: image14, number2: 14, text2: " هدفون بلوتوثی کیو سی وای مدل T13 TWS ",
                img3: image15, number3: 15, text3: " هدفون بی سیم مدل K55 "
            }
            ,
            {
                img1: image16, number1: 16, text1: " پوشک بچه مولفیکس مدل اقتصادی سایز 4 بسته 72 عددی ",
                img2: image17, number2: 17, text2: " کنسرو ماهی تن در روغن مایع ساحل - 180 گرم ",
                img3: image18, number3: 18, text3: " کنسرو لوبیا چیتی با سس گوجه فرنگی مکنزی - 380 گرم "
            }

        ]
        const act = info.map(ele => {
            return (

                <div >

                    <div className="bestseller-card  mt-3">

                        <div >
                            <a href="#" className="more-a">
                                <div className="text-end font12 line-height spacial-black overflow-hidden bestseller-card-text ">
                                    {ele.text1}
                                </div>

                            </a>




                        </div>



                        <div >
                            <a href="#" className="more-a">
                                <h2 className="number-one text-end">{ele.number1}</h2>
                            </a>

                        </div>
                        <div >
                            <a href="#" className="more-a">
                                <img className="bestseller-card-img" src={ele.img1} />
                            </a>

                        </div>



                    </div>
                    <div className="bestseller-card  mt-3">

                        <div >

                            <a href="#" className="more-a">
                                <div className="text-end font12 line-height spacial-black overflow-hidden bestseller-card-text ">
                                    {ele.text2}
                                </div>
                            </a>

                        </div>



                        <div >
                            <a href="#" className="more-a">
                                <h2 className="number-one text-end">{ele.number2}</h2>

                            </a>

                        </div>
                        <div >
                            <a href="#" className="more-a">
                                <img className="bestseller-card-img" src={ele.img2} />

                            </a>

                        </div>



                    </div>
                    <div className="bestseller-card  mt-3">

                        <div >

                            <a href="#" className="more-a">
                                <div className="text-end font12 line-height spacial-black overflow-hidden bestseller-card-text ">
                                    {ele.text3}
                                </div>

                            </a>

                        </div>



                        <div >
                            <a href="#" className="more-a">
                                <h2 className="number-one text-end">{ele.number3}</h2>
                            </a>

                        </div>
                        <div >
                            <a href="#" className="more-a">
                                <img className="bestseller-card-img" src={ele.img3} />

                            </a>

                        </div>



                    </div>
                </div>



            )
        }
        );








        return (
            <div className="bestseller" >
                <div className=" bestseller-header pt-3">
                    <div className="delete"></div>

                    <div className="text-center "><h2 className="font21 pe-5 porfrosh"> <i className="fa-solid fa-fire-flame-curved yellow ms-2"></i>  پرفروش ترین کالاها </h2></div>
                    <div className="text-start ms-3"> <a href="https://www.digikala.com/" className="bestseller-a">مشاهده همه </a></div>



                </div>

                <h2>  </h2>
                <Slider className="slide" {...settings}>
                    {act}

                </Slider>
            </div>
        )

    }



}




