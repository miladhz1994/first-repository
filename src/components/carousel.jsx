import React from "react";
import "../style.css";
import image1 from "../images/chanceb.jpg";
import image2 from "../images/aircondishinerb.gif";
import image3 from "../images/clothesb.jpg";
import image4 from "../images/techb.jpg";
import image5 from "../images/galaxya40b.jpg";
import image6 from "../images/campingb.jpg";
import image7 from "../images/caroilb.jpg";
import image8 from "../images/kitchen-toolsb.jpg";
import image9 from "../images/chances.gif";
import image10 from "../images/aircondishiners.gif";
import image11 from "../images/clothess.jpg";
import image12 from "../images/techs.jpg";
import image13 from "../images/galaxya40s.jpg";
import image14 from "../images/campings.jpg";
import image15 from "../images/caroils.jpg";
import image16 from "../images/kitchen-toolss.jpg";



export default function Crousel() {

    const images = [{ title: image1 }, { title: image2 }, { title: image3 }, { title: image4 }, { title: image5 }, { title: image6 }, { title: image7 }, { title: image8 }]
    const images2 = [{ title2: image9 }, { title2: image10 }, { title2: image11 }, { title2: image12 }, { title2: image13 }, { title2: image14 }, { title2: image15 }, { title2: image16 }]

    const act1 = images.map(elem => {

        if (elem.title === image1) {
            return (
                <div className="carousel-item active act1 " data-bs-interval="3500">
                    <img src={elem.title} className="d-block w-100 img-itself" alt={elem.title} />
                </div>

            )
        } else {
            return (
                <div className="carousel-item act1 " data-bs-interval="3500">
                    <img src={elem.title} className="d-block w-100 img-itself" alt={elem.title} />
                </div>
            )
        }

    }
    )
    const act2 = images2.map(elem => {

        if (elem.title2 === image9) {
            return (
                <div className="carousel-item active act2" data-bs-interval="3500">
                    <img src={elem.title2} className="d-block w-100 img-itself" alt={elem.title2} />
                </div>

            )
        } else {
            return (
                <div className="carousel-item act2" data-bs-interval="3500">
                    <img src={elem.title2} className="d-block w-100 img-itself" alt={elem.title2} />
                </div>
            )
        }

    }
    )




    const red2 = () => {

        document.querySelector(".button-itself-next").style.opacity = "0";
        document.querySelector(".button-itself-prev").style.opacity = "0";
    }

    const nums = [

        { to: "0", label: "slide 1" },
        { to: "1", label: "slide 2" },
        { to: "2", label: "slide 3" },
        { to: "3", label: "slide 4" },
        { to: "4", label: "slide 5" },
        { to: "5", label: "slide 6" },
        { to: "6", label: "slide 7" },
        { to: "7", label: "slide 8" }

    ]

    const numbers = nums.map(el => {

        if (el.to === "0") {
            return (

                <button type="button" className="indicator-itself active" data-bs-target="#carousel-big" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>


            )
        } else {
            return (
                <button type="button" className="indicator-itself" data-bs-target="#carousel-big" data-bs-slide-to={el.to} aria-label={el.label}></button>

            )

        }

    }

    )
    const numbers2 = nums.map(el => {

        if (el.to === "0") {
            return (

                <button type="button" className="indicator-itself active" data-bs-target="#carousel-big2" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>


            )
        } else {
            return (
                <button type="button" className="indicator-itself" data-bs-target="#carousel-big2" data-bs-slide-to={el.to} aria-label={el.label}></button>

            )

        }

    }

    )

    return (

        <>





            <div className="carousel1">
                <div id="carousel-big" className="carousel slide carousel-div" onMouseLeave={red2} data-bs-ride="carousel">

                    <div className="carousel-inner">

                        {act1}


                    </div>
                    <button className="carousel-control-prev button-itself-next" type="button" data-bs-target="#carousel-big" data-bs-slide="prev">
                        <span className="fa-solid fa-angle-left prev-button" aria-hidden="true"></span>

                    </button>
                    <button className="carousel-control-next button-itself-prev" type="button" data-bs-target="#carousel-big" data-bs-slide="next">
                        <span className="fa-solid fa-angle-right next-button" aria-hidden="true"></span>

                    </button>
                    <div className="carousel-indicators indicator-div">
                        {numbers}
                    </div>
                </div>
            </div>
            <div className="carousel2" >

                <div id="carousel-big2" className="carousel slide carousel-div" onMouseLeave={red2} data-bs-ride="carousel">

                    <div className="carousel-inner">

                        {act2}


                    </div>
                    <button className="carousel-control-prev button-itself-next" type="button" data-bs-target="#carousel-big2" data-bs-slide="prev">
                        <span className="fa-solid fa-angle-left prev-button" aria-hidden="true"></span>

                    </button>
                    <button className="carousel-control-next button-itself-prev" type="button" data-bs-target="#carousel-big2" data-bs-slide="next">
                        <span className="fa-solid fa-angle-right next-button" aria-hidden="true"></span>

                    </button>
                    <div className="carousel-indicators indicator-div">
                        {numbers2}
                    </div>
                </div>
            </div>

        </>

    )
}





















