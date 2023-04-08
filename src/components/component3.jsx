import React from "react";
import "../style.css"


export default function Navlittle() {
   

    const show = () => {
        document.querySelector(".lists-div").style.display = "block";
        document.querySelector(".dark-div").style.display = "block";
       
    }
    const hide = () => {
        document.querySelector(".lists-div").style.display = "none";
        document.querySelector(".dark-div").style.display = "none";
    };
    var prevScrollpos = window.pageYOffset;

    window.onscroll = () => {

        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".nav-little").style.top = "68px";
            document.querySelector(".nav-little").style.right = "0";
        } else {
            document.querySelector(".nav-little").style.top = "0";
            document.querySelector(".nav-little").style.right = "0";


        }

        prevScrollpos = currentScrollPos;

    }; 

    return (
        <div id="nav-litt" className=" d-flex justify-content-between nav-little">
            <div className="nav">

                <li className="nav-item li-border-bot" onMouseOver={show} onMouseLeave={hide} onClick={show} ><a href="https://www.digikala.com/" className="nav-link text-black " >  <li className="fa-solid fa-bars ms-1"> </li>  دسته بندی کالاها </a></li>
                <li className="pt-2 " ><span>|</span></li>
                <li className="nav-item li-border-bot"><a href="https://www.digikala.com/" className="nav-link nav-text"><li className="fa-solid fa-burger ms-1"> </li> سوپر مارکت </a></li>
                <li className="nav-item li-border-bot"><a href="https://www.digikala.com/" className="nav-link  nav-text"><li className="fa-solid fa-fire ms-1"> </li> پرفروش ترین ها</a></li>
                <li className="nav-item li-border-bot"><a href="https://www.digikala.com/" className="nav-link  nav-text"> <li className="fa-solid fa-percent ms-1 percent-icon"> </li> تخفیف ها و پیشنهاد ها</a></li>
                <li className="nav-item li-border-bot"><a href="https://www.digikala.com/" className="nav-link  nav-text"> <li className="fa-solid fa-percent ms-1 "> </li> شگفت انگیزها </a></li>
                <li className="pt-2"><span >|</span></li>
                <li className="nav-item li-border-bot"><a href="https://www.digikala.com/" className="nav-link  nav-text"> سوالی دارید؟</a></li>
                <li className="nav-item li-border-bot"><a href="https://www.digikala.com/" className="nav-link  nav-text "> فروشنده شوید!</a></li>

            </div>
            <div className="ms-3 mt-1">
                <a href="# " className="location">

                    <span> <li className="fa-solid fa-location-dot ms-1 "></li></span>
                    <span className="location-text"> لطفا شهر خود را انتخاب کنید</span>

                </a>

            </div>

        </div>







    )
}