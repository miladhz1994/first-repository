import React, { Component } from "react";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import image3 from "../images/amazing-typo.svg";
import image4 from "../images/box.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getproducts } from "../components/shop/actions.js"





export default function Magic() {


    const dispatch = useDispatch()
    const pro = useSelector(state => state.productsss.products)


    useEffect(() => {

        dispatch(getproducts())

    }, [])



    const result = pro.map(ele => {

        return (


            <div className="card-itself border-right">
                <a className="more-a" href="#"> 
                    <div className="card-image" >

                        <img className="card-img-itself" src={ele.image} />

                    </div>
                    <div className="card-body-itself d-flex justify-content-between">

                        <div className="">

                            ${ele.price}

                        </div>
                        <div>
                            <span className="magic-percent"> 15%</span>

                        </div>

                    </div>
                    <div className="prv-price">
                        {ele.name}
                    </div>
                </a>



            </div>
        )

    }

    )

    const settings = {

        className: "center",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 7,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ],
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    }



    return (

        <div className="magic-div">
            <div className="magic-sec ">
                <div className="card-section ">


                    <Slider className="slid amazing-slid" {...settings}>

                        <div className="amazing-part d-flex flex-column align-items-center"  >
                            <div>
                                <img className="amazing-img" src={image3} />
                            </div>
                            <div>
                                <img className="box-img" src={image4} />
                            </div>
                            <div>


                            </div>
                        </div>
                        {result}




                        <div className="w-100 h-100" >

                            <div className="card-itself amaz-view-all-div spacial2 d-flex flex-column justify-content-center align-items-center">
                                <div>
                                    <span className="arrow-left "><i className="fa-solid fa-arrow-left arrow-left-itself "></i> </span>
                                </div>
                                <div className="mt-3 moshahedeh">
                                    مشاهده همه
                                </div>
                            </div>

                        </div>

                    </Slider>

                </div>

            </div>


        </div>

    )

}




