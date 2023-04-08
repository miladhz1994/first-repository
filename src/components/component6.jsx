import React, { Component } from "react";




export default class Lists extends Component {

   

    render() {
        
        const show = () => {
            document.querySelector(".lists-div").style.display = "block";
            document.querySelector(".dark-div").style.display = "block";
            document.querySelector("body").style.height = "100%" ;
            document.querySelector("body").style.overflow = "hidden" ;
            

        }
        const hide = () => {
            document.querySelector(".lists-div").style.display = "none";
            document.querySelector(".dark-div").style.display = "none";
            document.querySelector("body").style.height = "auto" ;
            document.querySelector("body").style.overflow = "auto" ;
        }
        const showm = () => {
            document.querySelector(".mobile-div").style.display = "block";
            document.querySelector(".dark-div").style.display = "block";

        }
        const hidem = () => {
            document.querySelector(".mobile-div").style.display = "none";
            document.querySelector(".dark-div").style.display = "none";
        }


        return (
            <div className=" lists-div " onMouseLeave={hide} onMouseOver={show}>
                <div className="services-div">
                    <ul className="p-0">
                        <li  className="li-itself" onMouseOver={showm} onMouseLeave={hidem}><a href="https://www.digikala.com/" className="li-a-itself "><i className="fa-solid fa-mobile-screen ps-2"></i>  موبایل  </a></li>
                        <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself"> <i className="fa-solid fa-laptop ps-2"> </i> کالای دیجیتال</a></li>
                        <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself"> <i className="fa-solid fa-wrench ps-2"> </i> خودرو, ابزار و تجهیزات صنعتی </a></li>
                        <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself"><i className="fa-solid fa-shirt ps-2"> </i> مدوپوشاک</a></li>
                        <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself"> <li className="fa-solid fa-burger ps-2"> </li> کالاهای سوپرمارکتی</a></li>
                        <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself"> <li className="fa-solid fa-dice-four ps-2"> </li>  اسباب بازی, کودک ونوزاد</a></li>
                        <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself"> <li className="fa-solid fa-heart-circle-check ps-2"> </li> محصولات بومی و محلی</a></li>
                        <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself"> <li className="fa-solid fa-building-flag ps-2"> </li> زیبایی وسلامت </a></li>
                        <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself"> <li className="fa-solid fa-house-chimney ps-2"> </li> خانه و آشپزخانه</a></li>
                        <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself"> <li className="fa-solid fa-pencil ps-2"> </li> کتاب, لوازم تحریر وهنر </a></li>
                    </ul>
                </div>
            </div>
        )
    }
}