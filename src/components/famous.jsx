import React from "react";
import image1 from "../images/pril.png";
import image2 from "../images/persil.png";
import image3 from "../images/kingstar.png";
import image4 from "../images/sp.png";
import image5 from "../images/huawei.png";
import image6 from "../images/pakshoma.png"
import image7 from "../images/nor.jpg";
import image8 from "../images/samsung.jpg";
import image9 from "../images/kale.png";
import image10 from "../images/shiomi.png";
import image11 from "../images/my.png";
import image12 from "../images/activ.jpg";
import image13 from "../images/bioaqua.png";
import image14 from "../images/shon.jpg";
import image15 from "../images/tesco.jpg";
import image16 from "../images/zarmakron.jpg";
import image17 from "../images/fresh.jpg";
import image18 from "../images/panter.jpg";
import image19 from "../images/mrrad.jpg";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Famous() {
    const settings = {
        className: "center",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 9,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ],
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    }

    const images = [
        { title: image1 },
        { title: image2 },
        { title: image3 },
        { title: image4 },
        { title: image6 },
        { title: image7 },
        { title: image8 },
        { title: image9 },
        { title: image10 },
        { title: image11 },
        { title: image12 },
        { title: image13 },
        { title: image14 },
        { title: image15 },
        { title: image16 },
        { title: image17 },
        { title: image18 },
        { title: image19 },

    ]
    const imgfinal = images.map(elem => {

        return (

            <div className="famous-item">
                <a href="#"> <img src={elem.title} className="d-block w-100 famous-item-img" alt={elem.title} /></a>


            </div>

        )


    }

    )







    return (
        <div className="famous mb-3">
            <div className="famous-header">
                <i className="fa-regular fa-star ms-1 yellow"></i>
                محبوب ترین برند ها

            </div>
            <div className="famous-body">
                <Slider className="slid" {...settings}>
                    {imgfinal}



                </Slider>

            </div>




        </div>

    )
}