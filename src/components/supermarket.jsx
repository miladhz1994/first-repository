import React from "react";
import image1 from "../images/basket.png"
import image2 from "../images/fresh.svg"
import image3 from "../images/drug.jpg"


export default function Supermarket() {


    return (
        <div className="super-market d-flex flex-row justify-content-around ">
            <div className="super-market-right d-flex flex-row pt-2">
                <div className="pt-3 super-market-right-img-div">
                    <img className="super-market-right-img-1" src={image1} />
                </div>
                <div className="pt-4 pe-3 ps-3 super-market-right-img-div">
                    <img className="super-market-right-img-2" src={image2} />

                </div>
                <div className="pt-4 ">
                    <p className="supermarket-takhfif">تا 50% تخفیف  </p>

                </div>

            </div>
            <div className="super-market-left d-flex pt-3">
                <div className="w-100 d-flex flex-row">


                    <div className="super-market-kala-div one ms-2">
                        <a href="https://www.digikala.com/">

                            <img className="rounded-circle super-market-kala-img " src={image3} />

                        </a>
                        <div className="percent-kala">
                            <span className="magic-percent">30%</span>

                        </div>
                    </div>
                    <div className="super-market-kala-div two ms-2">
                        <a href="https://www.digikala.com/">

                            <img className="rounded-circle super-market-kala-img " src={image3} />

                        </a>
                        <div className="percent-kala">
                            <span className="magic-percent">30%</span>

                        </div>
                    </div>
                    <div className="super-market-kala-div three ms-2">
                        <a href="https://www.digikala.com/">

                            <img className="rounded-circle super-market-kala-img " src={image3} />

                        </a>
                        <div className="percent-kala">
                            <span className="magic-percent">30%</span>

                        </div>
                    </div>
                    <div className="super-market-kala-div ms-2">
                        <a href="https://www.digikala.com/">

                            <img className="rounded-circle super-market-kala-img " src={image3} />

                        </a>
                        <div className="percent-kala">
                            <span className="magic-percent">30%</span>

                        </div>
                    </div>
                    <div className="super-market-kala-div ms-2">
                        <a href="https://www.digikala.com/">

                            <img className="rounded-circle super-market-kala-img " src={image3} />

                        </a>
                        <div className="percent-kala">
                            <span className="magic-percent">30%</span>

                        </div>
                    </div>
                    <div className="super-market-kala-div ms-2">
                        <a href="https://www.digikala.com/">

                            <img className="rounded-circle super-market-kala-img " src={image3} />

                        </a>
                        <div className="percent-kala">
                            <span className="magic-percent">30%</span>

                        </div>
                    </div>
                    <div className="supermarket-kala-view-all mt-3">
                        <a href="#" className="more-a"> بیش از 80 کالا<i className="fa-solid fa-arrow-left me-2 left-dir-arrow"> </i></a>
                    </div>
                </div>
                <div className="arrow-div ">
                    <a className="arrow-div-a" href="https://www.digikala.com/"> <i className="fa-solid fa-arrow-left me-2 left-dir-arrow"> </i> </a>

                </div>


            </div>




        </div>
    )
}