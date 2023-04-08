import React, { Component } from "react";

export default class Mobile extends Component {


    render() {

        const show = () => {

            document.querySelector(".mobile-div").style.display = "block";
            document.querySelector(".lists-div").style.display = "block";
            document.querySelector(".dark-div").style.display = "block";
            document.querySelector("body").style.height = "100%";
            document.querySelector("body").style.overflow = "hidden";


        }
        const hide = () => {
            
            document.querySelector(".mobile-div").style.display = "none";
            document.querySelector(".lists-div").style.display = "none";
            document.querySelector(".dark-div").style.display = "none";
            document.querySelector("body").style.height = "auto";
            document.querySelector("body").style.overflow = "auto";


        }


        return (

            <div className=" mobile-div pe-3 " onMouseOver={show} onMouseLeave={hide}>
                <div>
                    <a href="https://www.digikala.com/" className="all-mobiles"> همه محصولات موبایل<i className="fa-solid fa-chevron-left me-2 left-dir-arrow"> </i> </a>
                </div>
                <div className="mobile-body-div d-flex flex-row">
                    <div className="first-div">
                        <ul className="p-0">
                            <li className="li-list-style line-height"><a className="red text-decoration black-color"><span className="text-danger ms-1">|</span>  برندهای مختلف گوشی موبایل <i className="fa-solid fa-chevron-left me-1 left-dir-arrow"> </i> </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی سامسونگ </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی شیائومی  </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی هواوی   </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی وانپلاس  </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی نوکیا   </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی موتورولا   </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی ال جی   </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی آنر  </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی جی پلاس  </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی جی ال ایکس  </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی  بلو   </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی  کاترپیلار  </a></li>

                        </ul>

                    </div>
                    <div className="second-div d-flex flex-column">
                        <ul className="p-0">
                            <li className="li-list-style line-height"><a className="red text-decoration black-color"><span className="text-danger ms-1">|</span> گوشی براساس قیمت <i className="fa-solid fa-chevron-left me-1 left-dir-arrow"> </i> </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی تا 2 میلیون تومان </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی تا 5 میلیون تومان  </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی تا 15 م تومان   </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی بالای 15 میلیون تومان  </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی تا 7 میلیون تومان   </a></li>

                        </ul>
                        <div >
                            <ul className="p-0">
                                <li className="li-list-style line-height"><a className="red text-decoration black-color"><span className="text-danger ms-1">|</span> گوشی براساس حافظه داخلی <i className="fa-solid fa-chevron-left me-1 left-dir-arrow"> </i> </a></li>
                                <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen " >گوشی تا 16 گیگا بایت </a></li>
                                <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی تا 32 گیگابایت </a></li>
                                <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی تا 64 یگابایت </a></li>
                                <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen "> گوشی تا 128 گیگابایت </a></li>
                                <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی تا 1 ترابایت </a></li>

                            </ul>

                        </div>

                    </div>

                    <div>
                        <ul className="p-0 second-div d-flex flex-column">
                            <li className="li-list-style line-height"><a className="red text-decoration black-color"><span className="text-danger ms-1">|</span> گوشی براساس قیمت <i className="fa-solid fa-chevron-left me-1 left-dir-arrow"> </i> </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی تا 2 میلیون تومان </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی تا 5 میلیون تومان  </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی تا 15 م تومان   </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی بالای 15 میلیون تومان  </a></li>
                            <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی تا 7 میلیون تومان   </a></li>

                        </ul>
                        <div >
                            <ul className="p-0">
                                <li className="li-list-style line-height"><a className="red text-decoration black-color"><span className="text-danger ms-1">|</span> گوشی براساس حافظه داخلی <i className="fa-solid fa-chevron-left me-1 left-dir-arrow"> </i> </a></li>
                                <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen " >گوشی تا 16 گیگا بایت </a></li>
                                <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی تا 32 گیگابایت </a></li>
                                <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی تا 64 یگابایت </a></li>
                                <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen "> گوشی تا 128 گیگابایت </a></li>
                                <li className=" li-list-style line-height"><a className=" red text-decoration gray-color font-thirteen ">گوشی تا 1 ترابایت </a></li>

                            </ul>

                        </div>

                    </div>

                </div>


            </div>
        )
    }
}