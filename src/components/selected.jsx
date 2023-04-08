import React from "react";
import image from "../images/bed.jpg";
import image1 from "../images/shirt-guitar.jpg";
import image2 from "../images/shirt-pinc.jpg";
import image3 from "../images/suit-1.jpg";
import image4 from "../images/suit-2.jpg";
import image5 from "../images/shirt-body.jpg";
import image6 from "../images/soeshirt.jpg";
import image7 from "../images/pakage.jpg";
import image8 from "../images/shirt-black.jpg";
import image9 from "../images/belt.jpg";
import image10 from "../images/runnig-shoe.jpg";
import image11 from "../images/black-sucks.jpg";
import image12 from "../images/slipers.jpg";
import image13 from "../images/belt2.jpg";
import image14 from "../images/hat.jpg";
import image15 from "../images/tshirt.jpg";
import image16 from "../images/wind-power.jpg";
import image17 from "../images/body-building.jpg";
import image18 from "../images/bodyshirt.jpg";






export default function Selected() {

    const infos = [
        { img: image1, price: 139000, pre: 240000, discount: 42 },
        { img: image2, price: 199000, pre: 345000, discount: 42 },
        { img: image3, price: 1425000, pre: 1500000, discount: 5 },
        { img: image4, price: 1567500, pre: 1650000, discount: 5 },
        { img: image5, price: 160650, pre: 255000, discount: 37 },
        { img: image6, price: 551000, pre: 580000, discount: 5 },
        { img: image7, price: 551000, pre: 580000, discount: 5 },
        { img: image8, price: 551000, pre: 580000, discount: 5 },
        { img: image9, price: 551000, pre: 580000, discount: 5 },
        { img: image10, price: 551000, pre: 580000, discount: 5 },
        { img: image11, price: 551000, pre: 580000, discount: 5 },
        { img: image12, price: 551000, pre: 580000, discount: 5 },
        { img: image13, price: 551000, pre: 580000, discount: 5 },
        { img: image14, price: 551000, pre: 580000, discount: 5 },
        { img: image15, price: 551000, pre: 580000, discount: 5 },
        { img: image16, price: 551000, pre: 580000, discount: 5 },
        { img: image17, price: 551000, pre: 580000, discount: 5 },
        { img: image18, price: 551000, pre: 580000, discount: 5 },
    ]

    const act = infos.map(ele => {
        return (
            <div className="selected-body-card-main ">
                <div className="selected-body-card p-2 text-center">
                    <a href="#" className="more-a">
                        <div className="card-image" >
                            <img className=" selected-body-card-image " src={ele.img} />

                        </div>
                        <div className="card-body-itself d-flex justify-content-between">
                            <div>
                                <span className="magic-percent">{ele.discount}%</span>

                            </div>
                            <div className="ms-3">
                                {ele.price}

                            </div>


                        </div>
                        <div className="prv-price text-start ms-3">
                            {ele.pre}
                        </div>


                    </a>

                </div>
            </div>



        )
    })


    return (
        <>

            <div className="bed-banner">

                <img className="bed-banner-img" src={image} />

            </div>
            <div className="selected  ">
                <div className="selected-header">
                    <li className="fa-solid fa-percent ms-1 percent-icon text-danger"> </li> منتخب محصولات تخفیف و حراج

                </div>
                <div className="selected-body">
                    <div className="selected-body-container">

                        {act}

                    </div>

                </div>
                <div className="text-center slected-footer">
                    <a href="https://www.digikala.com/" className=" slected-footer "> مشاهده بیشتر  <i className="fa-solid fa-chevron-left"></i></a>

                </div>

            </div>
        </>
    )
}