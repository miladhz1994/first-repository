import React from "react";
import image1 from "../images/logo.svg";
import "../style.css";
import { useRef } from "react";
import Lists from "./component6";
import Mobile from "./mobilecomp";
import Offcanvas from "./offcanvas";



export default function Comp2() {

    const inputref = useRef()

    const show = () => {

        document.querySelector(".search-box").style.display = "block";
        inputref.current.focus();
        document.querySelector(".dark-div").style.display = "block";

    }
    const hide = () => {

        document.querySelector(".search-box").style.display = "none";
        document.querySelector(".dark-div").style.display = "none";

    }





    return (
        <>

            <div className="w-100 nav-bar ">

                <div className="res-nav-bar d-flex flex-row justify-content-between mt-3">
                    <div>
                        <button className="res-nav-bar-but " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ><li className="fa-solid fa-bars font17"> </li></button>
                    </div>
                    <div>

                        <img src={image1} alt="img" />

                    </div>
                    <div >

                        <i className="fa-regular fa-circle-question ms-3 font21"></i>

                    </div>


                </div>

                {<Offcanvas />}

                <div className=" d-flex justify-content-between nav-topest" >


                    <div className="header-right d-flex me-4 ">

                        <div className="mt-2 nav-topest-logo-div">

                            <img className="ms-3 " src={image1} alt="img" />

                        </div>
                        <div className="search-input me-3" onClick={show} >

                            <span className="float-end ms-3 ">

                                <i className="fa-solid fa-magnifying-glass color-gray icon-color "></i>

                            </span>

                            <span className="float-right float-end icon-color2">
                                جستجو
                            </span>

                        </div>
                        <button className=" search-input2 me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">

                            <span className="float-end ms-3 ">
                                <i className="fa-solid fa-magnifying-glass color-gray icon-color "></i>
                            </span>

                            <span className="float-right float-end icon-color2">
                                جستجو
                            </span>

                        </button>

                        <div className="offcanvas offcanvas-bottom  h-100" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                            <div className="offcanvas-header">
                                <div className="search-box-header row  w-100 m-0">
                                    <div className="col-1 ">

                                        <button type="button " className="btn-close-offcanavas" data-bs-dismiss="offcanvas" aria-label="Close"> <i className="fa-solid fa-arrow-right search-icon2 mt-2 me-1"></i></button>

                                    </div>
                                    <div className="col-11 ">
                                        <input ref={inputref} className="w-100 input-itself mt-2 " type={"search"} placeholder={"جستجو"} />

                                    </div>

                                    <div className="divider2">

                                    </div>


                                </div>

                            </div>
                            <div className="offcanvas-body small">
                                <i className="fa-solid fa-fire-flame-curved yellow ms-2"></i> جستجو های پرطرفدار
                            </div>
                        </div>

                        <div className="search-box rounded shadow-sm " onBlur={hide}>
                            <div className="search-box-header row  w-100 m-0">
                                <div className="col-1 ">
                                    <i className="fa-solid fa-magnifying-glass search-icon2 mt-2 me-1"></i>

                                </div>
                                <div className="col-11 ">
                                    <input ref={inputref} className="w-100 input-itself mt-2 " type={"search"} placeholder={"جستجو"} />

                                </div>

                                <div className="divider2">

                                </div>


                            </div>

                        </div>

                    </div>
                    <div className="header-left ms-4">
                        <a className="enter" href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwijhon7_PX6AhV3gP0HHYiOCOIQPAgI"  >
                            <span><i className="fa-solid fa-arrow-right-to-bracket login-icon ms-1"></i></span>

                            ورود

                            <span className="header-left-divider ps-1 pe-1">
                                |
                            </span>
                            <span className="header-left-register"> ثبت نام</span >


                        </a>
                        <div className="divider d-inline-block ms-4 me-3">

                        </div>
                        <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwijhon7_PX6AhV3gP0HHYiOCOIQPAgI">
                            <i className="fa-solid fa-cart-shopping shopping-icon"></i>
                        </a>

                    </div>

                </div>

                <Lists />
                <Mobile />



            </div>

            <div className="dark-div">

            </div>
        </>

    )
}


























