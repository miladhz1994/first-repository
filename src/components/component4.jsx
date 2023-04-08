import React from "react";
import image1 from "../images/jet.png";
import image2 from "../images/digistyle.png";
import image3 from "../images/digipay.png";
import image4 from "../images/digibussiness.png";
import image5 from "../images/superviser.png";
import image6 from "../images/chance.png";
import image7 from "../images/shopping.png";






export default function Digistyle() {



    const infos = [
        { img: image1, title: "دیجی کالا جت" },
        { img: image2, title: "دیجی استایل " },
        { img: image3, title: "دیجی پی" },
        { img: image4, title: "دیجی کالا بیزینس" },
        { img: image5, title: " سورپرایز" },
        { img: image6, title: " چرخ و بخت" },
        { img: image7, title: " خرید سر ماه" },
    ]
    const carts = infos.map(cart => {
        return (




            <div className="jet-main">
                <div className="jet-cart">
                    <div className="jet-cart-sec">
                        <a className="cart-a d-flex flex-column" href="https://www.digikala.com/">

                            <img className="jet-img " src={cart.img} />
                            <span className="sub-text">
                                {cart.title}

                            </span>

                        </a>
                    </div>


                </div>
            </div>



        )
    }

    )

    return (
        <div className="d-flex justify-content-around main-div">

            {carts}

            <div className="jet-cart">

                <div className="jet-cart-sec d-flex flex-column">
                    <a className="more" href="https://www.digikala.com/">
                        <i className="fa-solid fa-ellipsis text-black"></i>

                    </a>
                    <span className="sub-text">بیشتر</span>
                </div>


            </div>

        </div>

    )





}