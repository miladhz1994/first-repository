import React from "react";
import image1 from "../images/green-car.jpg";
import image2 from "../images/seller.jpg";
import image3 from "../images/bond.jpg";
import image4 from "../images/drowning.jpg";

export default function Digimeg() {


    const infos = [

        { img: image1, text: "تصاویر میتسوبیشی دلیکا مینی ۲۰۲۳ منتشر شد" },
        { img: image2, text: "بررسی کباب‌زن آرکا مدل HK؛ سبک و کاربردی برای پیک‌نیک" },
        { img: image3, text: "بررسی اسپیکر بلوتوثی GTS-1360؛ ارزان‌قیمت و پرفروش" },
        { img: image4, text: "چطور در محل کار به طور اصولی درخواست کمک کنیم؟" }
    ]

    const act = infos.map(ele => {

        return (
            <div className="digimeg-body-card d-flex flex-column ">

                <div>
                    <a href="#" className="more-a">
                        <img className="w-100 h-100" src={ele.img} />
                    </a>


                </div>
                <div className="digimeg-body-card-text ">
                    <a href="#" className="more-a">
                        {ele.text}

                    </a>

                </div>

            </div>


        )
    })


    return (


        <div className="digimeg">
            <div className="digimeg-header d-flex flex-row justify-content-between">
                <div>
                    خواندنی ها
                </div>
                <div >
                    <a className="digimeg-header-more" href="https://www.digikala.com/"> مطالب بیشتر در دیجی مگ </a>
                </div>

            </div>
            <div className="digimeg-body">


                {act}


            </div>
        </div>



    )
}




