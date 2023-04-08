import React from "react";
import image1 from "../images/digimag.svg";
import image2 from "../images/digipay.svg";
import image3 from "../images/digistyle.svg";
import image4 from "../images/digiplus.svg";
import image5 from "../images/digiclub (1).svg";
import image6 from "../images/jet.svg";
import image7 from "../images/magnet.svg";
import image8 from "../images/digiMehr.svg";
import image9 from "../images/fidibo.svg";
import image10 from "../images/diginext.svg";
import image11 from "../images/pindo.svg";
import image12 from "../images/komodaa.svg";
import image13 from "../images/digiexpress.svg";
import image14 from "../images/ganjeh.svg";
import image15 from "../images/digify.svg";
import image16 from "../images/smartech.svg";
import image17 from "../images/digikala-business.svg";




export default function Footer2() {

    const infos = [
        { img: image1 },
        { img: image2 },
        { img: image3 },
        { img: image4 },
        { img: image5 },
        { img: image6 },
        { img: image7 },
        { img: image8 },

    ]
    const infos2 = [

        { img: image9 ,},
        { img: image10 },
        { img: image11 },
        { img: image12 },
        { img: image13 },
        { img: image14 },
        { img: image15 },
        { img: image16 },
        { img: image17 , clas : "aria"},
    ]

    const act = infos.map(ele => {

        return (

            <div className="footer2-img-div">
                <a href="#"><img className="footer2-img mb-2" src={ele.img} /></a>
            </div>

        )
    })
    const act2 = infos2.map(elem => {

        return (

            <div className="footer2-img-div " id = {elem.clas}>
                <a href="#"><img className="footer2-img mb-2" src={elem.img} /></a>
            </div>

        )
    })

    return (


        <div className="footer2 ">

            <div className="w-100 h-100 background-color">
                <div className="footer2-top">

                    {act}
                    {act2}

                </div>
                
            </div>


        </div>

    )
}