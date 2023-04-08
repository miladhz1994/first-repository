import React from "react";
import image1 from "../images/headphone.png"
import image2 from "../images/iphone.png"
import image3 from "../images/bag.png"
import image4 from "../images/diary.png"
import image5 from "../images/tools.png"
import image6 from "../images/rainbow.png"
import image7 from "../images/nativ.png"
import image8 from "../images/beauty.png"
import image9 from "../images/ketry.png"
import image10 from "../images/book.png"
import image11 from "../images/sport.png"


export default function Category() {
    const info = [
        { img: image1, text: "کالای دیجیتال" },
        { img: image2, text: " موبایل " },
        { img: image3, text: " مد و پوشاک " },
        { img: image4, text: "کالای های سوپر مارکتی" },
        { img: image5, text: " خودرو ایزار و تجهیزات صنعتی" },
        { img: image6, text: " اسباب بازی کودک و نوزاد" },

    ]
    const info2 = [
        { img: image7, text: " محصولات بومی و محلی" },
        { img: image8, text: " زیبایی و سلامت " },
        { img: image9, text: "خانه و آشپزخانه  " },
        { img: image10, text: " کتاب لوازم التحریر و هنر " },
        { img: image11, text: " ورزش " },
      
       

    ]
    const act = info.map(ele => {
        return (
            <div className="category-body-card">
                <a className="category-a">
                    <img className="category-a-img" src={ele.img} />
                    <p> {ele.text}</p>
                </a>
            </div>


        )

    })
    const act2 = info2.map(elem => {
        return (
            <div className="category-body-card">
                <a className="category-a">
                    <img className="category-a-img" src={elem.img} />
                    <p> {elem.text}</p>
                </a>
            </div>


        )

    })



    return (
        <div className="category d-flex flex-column">
            <div className="category-header mt-3">

                <p>دسته بندی های دیجی کالا</p>

            </div>
            <div className="category-body  d-flex flex-wrap justify-content-center mt-4">
                {act}
                {act2}
               

            </div>
           

        </div>

    )
}