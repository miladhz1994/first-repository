import React from "react";
import image from "../images/digi.svg";
import image1 from "../images/express-delivery.svg";
import image2 from "../images/cash-on-delivery.svg";
import image3 from "../images/support.svg";
import image4 from "../images/days-return.svg";
import image5 from "../images/original-products.svg";
import image6 from "../images/footerlogo2.png";
import image7 from "../images/google-play.svg";
import image8 from "../images/coffe-bazzar.svg";
import image9 from "../images/myket.svg";
import image10 from "../images/sib-app.svg";
import image11 from "../images/rezi.png";
import image12 from "../images/kasbokar.png";
import image13 from "../images/logo.png";
import Footer2 from "./footer2";



export default function Footer() {
    const infos = [
        { img: image1, text: "امکان تحویل اکسپرس" },
        { img: image2, text: " امکان پرداخت در محل" },
        { img: image3, text: " 7 روز هفته,24 ساعته" },
        { img: image4, text: " هفت روز زمانت بازگشت کالا" },
        { img: image5, text: " ضمانت اصل بودن کالا" },
    ]
    const act = infos.map(ele => {
        return (
            <div className="text-center ">
                <a href="#" className="more-a">
                    <img src={ele.img} />
                    <p className="font13">  {ele.text}</p>

                </a>


            </div>

        )
    })
    const gotop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className="footer">

            <div className="footer-part1  d-flex flex-row justify-content-between">
                <div className="footer-part1-right">
                    <img className="footer-part1-right-img" src={image} />
                    <p className="mt-3 font14">
                        تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱

                        <span className="me-3 ms-3"> | </span>

                        ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
                    </p>


                </div>
                <div className="footer-part1-left">
                    <button onClick={gotop} className="footer-button" > بازگشت به بالا <i className="fa-solid fa-chevron-up  me-2 "></i></button>

                </div>


            </div>
            <div className="footer-part2  d-flex flex-row justify-content-around mt-4">
                {act}


            </div>
            <div className="footer-part3 mt-5 d-flex flex-row justify-content-between">
                <div>

                    <ul className="p-0" >
                        <li className="li-list-style"> با دیجی کالا</li>
                        <li className="li-list-style mt-3"> <a className="text-decoration footer-a-hover gray-color" href="https://www.digikala.com/" > اتاق خبر دیجی کالا</a></li>
                        <li className="li-list-style mt-3"> <a className="text-decoration footer-a-hover gray-color" href="https://www.digikala.com/"> فروش در دیجی کالا</a></li>
                        <li className="li-list-style mt-3"> <a className="text-decoration footer-a-hover gray-color" href="https://www.digikala.com/"> فرصت های شغلی</a></li>
                        <li className="li-list-style mt-3"> <a className="text-decoration footer-a-hover gray-color" href="https://www.digikala.com/"> گزارش تخلف در دیجی کالا</a></li>
                        <li className="li-list-style mt-3"> <a className="text-decoration footer-a-hover gray-color" href="https://www.digikala.com/"> تماس با دیجی کالا</a></li>
                        <li className="li-list-style mt-3"> <a className="text-decoration footer-a-hover gray-color" href="https://www.digikala.com/">  درباره دیجی کالا</a></li>
                    </ul>

                </div>
                <div>

                    <ul className="p-0" >
                        <li className="li-list-style">  خدمات مشتریان </li>
                        <li className="li-list-style mt-3"> <a className="text-decoration footer-a-hover gray-color" href="https://www.digikala.com/" > پاسخ به پرسش های متداول </a></li>
                        <li className="li-list-style mt-3"> <a className="text-decoration footer-a-hover gray-color" href="https://www.digikala.com/">رویه های بازگرداندن کالا</a></li>
                        <li className="li-list-style mt-3"> <a className="text-decoration footer-a-hover gray-color" href="https://www.digikala.com/">  شرایط استفاده </a></li>
                        <li className="li-list-style mt-3"> <a className="text-decoration footer-a-hover gray-color" href="https://www.digikala.com/"> حریم خصوصی </a></li>
                        <li className="li-list-style mt-3"> <a className="text-decoration footer-a-hover gray-color" href="https://www.digikala.com/"> گزارش باگ </a></li>
                    </ul>

                </div>
                <div className="rahnamaye-kharid">

                    <ul className="p-0" >

                        <li className="li-list-style">  راهنمای خرید از دیجی کالا</li>
                        <li className="li-list-style mt-3"> <a className="text-decoration footer-a-hover gray-color" href="https://www.digikala.com/" > نحو ثبت سفارش </a></li>
                        <li className="li-list-style mt-3"> <a className="text-decoration footer-a-hover gray-color" href="https://www.digikala.com/"> رویه ارسال سفارش </a></li>
                        <li className="li-list-style mt-3"> <a className="text-decoration footer-a-hover gray-color" href="https://www.digikala.com/"> شیوه های پرداخت</a></li>

                    </ul>

                </div>
                <div className=" original-hamrahbama ">

                    <p >  همراه با ما باشید</p>
                    <div className="d-flex flex-row justify-content-between">
                        <a href="https://www.digikala.com/" className="barnds-icon"><i className="fa-brands fa-instagram"> </i></a>
                        <a href="https://www.digikala.com/" className="barnds-icon"><i className="fa-brands fa-twitter"> </i></a>
                        <a href="https://www.digikala.com/" className="barnds-icon"><i className="fa-brands fa-linkedin"> </i></a>
                        <a href="https://www.digikala.com/" className="barnds-icon"><i className="fa-solid fa-video"> </i></a>

                    </div>
                    <div className="mt-5">
                        <p> با ثبت ایمیل از جدیدترین تخفیف ها باخبر شوید</p>
                    </div>
                    <div className=" footer-input">

                        <input className="input-right" type="email" placeholder="ایمیل شما" />

                        <input className="input-right" type="submit" value="ثبت" />

                    </div>


                </div>




            </div>
            <div className="hamrah-ba-ma ">
                <div className=" d-flex flex-row justify-content-between mb-4">


                    <p className="pe-3">  همراه با ما باشید</p>
                    <div className="d-flex flex-row justify-content-between px-3">
                        <a href="https://www.digikala.com/" className="barnds-icon"><i className="fa-brands fa-instagram ms-4"> </i></a>
                        <a href="https://www.digikala.com/" className="barnds-icon"><i className="fa-brands fa-twitter ms-4"> </i></a>
                        <a href="https://www.digikala.com/" className="barnds-icon"><i className="fa-brands fa-linkedin ms-4"> </i></a>
                        <a href="https://www.digikala.com/" className="barnds-icon"><i className="fa-solid fa-video ms-2"> </i></a>

                    </div>

                </div>

                <div className=" footer-input px-3 mb-3">

                    <input className="input-right" type="email" placeholder="ایمیل شما" />

                    <input className="input-right" type="submit" value="ثبت" />

                </div>


            </div>
            <div className="download d-flex flex-row justify-content-between">
                <div className="mt-2">
                    <img className="download-right-logo" src={image6} />
                    <span className="download-right-text me-2"> دانلود الیکیشن دیجی کالا</span>
                </div>
                <div className=" d-flex flex-row justify-content-between mt-2">
                    <div className="download-links">

                        <div>
                            <a href="#" className="more-a">

                                <img className="dwnload-links-img" src={image7} />

                            </a>

                        </div>
                        <div>
                            <a href="#" className="more-a">
                                <img className="dwnload-links-img" src={image8} />

                            </a>


                        </div>
                        <div>
                            <a href="#" className="more-a">
                                <img className="dwnload-links-img" src={image9} />

                            </a>


                        </div>
                        <div>

                            <a href="#" className="more-a">
                                <img className="dwnload-links-img" src={image10} />

                            </a>


                        </div>


                    </div>
                    <div className="download-links-dot pe-2 me-3">

                        <i className="fa-solid fa-ellipsis"></i>

                    </div>




                </div>
                <div className="more-iformation">
                    <a href="#" className="more-a">
                        <span className="font14 text-white"> اطلاعات بیشتر </span><span className="font12 text-white"> <i className="fa-solid fa-chevron-left"></i></span>

                    </a>

                </div>



            </div>
            <div className="footer-part4 mt-3 ">
                <div>
                    <p >فروشگاه اینترنتی دیجی کالا, بررسی, انتخاب و خرید آنلاین</p>
                    <p className="footer-part4-text">یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع،
                        باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت
                        بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی
                        آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
                    </p>
                    <a href="#" className="  text-decoration gray-color font14 ">مشاهده بیشتر </a><span className="light-blue"><i className="fa-solid fa-chevron-left "></i></span>
                </div>
                <div className="delete">

                </div>
                <div className="footer-part4-left">
                    <div className="footer-part4-left-card">
                        <a href="#">
                            <img className="footer-part4-left-card-img" src={image11} />
                        </a>


                    </div>
                    <div className="footer-part4-left-card">
                        <a href="#">
                            <img className="footer-part4-left-card-img" src={image12} />
                        </a>


                    </div>

                    <div className="footer-part4-left-card">
                        <a href="#">
                            <img className="footer-part4-left-card-img" src={image13} />
                        </a>


                    </div>



                </div>

            </div>
            <div className="text-center font14 gray-color mt-4 mb-5">
                برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.
            </div>

            <Footer2 />

        </div>


    )
}