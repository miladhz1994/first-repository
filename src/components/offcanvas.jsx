import React from "react";
import image1 from "../images/logo.svg";


export default function Offcanvas() {

    const info = [
        { title: "موبایل", ref: "#mobile" },
        { title: " خودرو, ابزار و تجهیزات صنعتی ", ref: "#industeria" },
        { title: " مدوپوشاک", ref: "#fashion" },
        { title: " کالاهای سوپرمارکتی", ref: "#supermarket" },
        { title: "  اسباب بازی, کودک ونوزاد", ref: "#toys" },
        { title: "  زیبایی وسلامت ", ref: "#health" },
        { title: "  خانه و آشپزخانه", ref: "#kitchen" },
        { title: " سرگرمی  ", ref: "#entertainment" },
        { title: "   کتاب, لوازم تحریر وهنر  ", ref: "#books" },
    ];


    const act = info.map(ele => {


        if (ele.ref === "#mobile") {


            return (

                <div className=" d-flex flex-column">
                    <div className=" d-flex flex-row justify-content-between">

                        <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>

                        <div> <a className="btn btn-primary caro-btn" data-bs-toggle="collapse" href={ele.ref} role="button" aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-chevron-down mt-3 font14"></i></a> </div>

                    </div>

                    <div className="collapse " id="mobile">
                        <div className="card card-body border-0">
                            <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>
                            <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>
                        </div>
                    </div>
                </div>

            )

        } else if (ele.ref === "#industeria") {


            return (
                <div className=" d-flex flex-column">
                    <div className=" d-flex flex-row justify-content-between">
                        <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>

                        <div> <a className="btn btn-primary caro-btn" data-bs-toggle="collapse" href={ele.ref} role="button" aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-chevron-down mt-3 font14"></i></a> </div>

                    </div>


                    <div className="collapse" id="industeria">
                        <div className="card card-body border-0">
                            <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>
                        </div>
                    </div>
                </div>

            )


        } else if (ele.ref === "#fashion") {

            return (

                <div className=" d-flex flex-column ">

                    <div className=" d-flex flex-row justify-content-between">
                        <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>

                        <div> <a class="btn btn-primary caro-btn" data-bs-toggle="collapse" href={ele.ref} role="button" aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-chevron-down mt-3 font14"></i></a> </div>

                    </div>
                    <div className="collapse" id="fashion">
                        <div className="card card-body border-0">
                            <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>
                        </div>
                    </div>
                </div>

            )


        } else if (ele.ref === "#supermarket") {


            return (
                <div className=" d-flex flex-column">

                    <div className=" d-flex flex-row justify-content-between">
                        <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>

                        <div> <a class="btn btn-primary caro-btn" data-bs-toggle="collapse" href={ele.ref} role="button" aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-chevron-down mt-3 font14"></i></a> </div>

                    </div>

                    <div className="collapse" id="supermarket">

                        <div className="card card-body border-0">
                            <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>
                        </div>
                    </div>
                </div>


            )


        }
        else if (ele.ref === "#toys") {

            return (
                <div className=" d-flex flex-column ">

                    <div className=" d-flex flex-row justify-content-between">
                        <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>

                        <div> <a className="btn btn-primary caro-btn" data-bs-toggle="collapse" href={ele.ref} role="button" aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-chevron-down mt-3 font14"></i></a> </div>

                    </div>


                    <div className="collapse" id="toys">
                        <div className="card card-body border-0">
                            <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>
                        </div>
                    </div>
                </div>

            )


        }
        else if (ele.ref === "#health") {

            return (
                <div className=" d-flex flex-column">

                    <div className=" d-flex flex-row justify-content-between">
                        <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>

                        <div> <a className="btn btn-primary caro-btn" data-bs-toggle="collapse" href={ele.ref} role="button" aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-chevron-down mt-3 font14"></i></a> </div>

                    </div>



                    <div className="collapse" id="health">
                        <div className="card card-body border-0">
                            <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>
                        </div>
                    </div>
                </div>

            )


        }
        else if (ele.ref === "#kitchen") {

            return (
                <div className=" d-flex flex-column">

                    <div className=" d-flex flex-row justify-content-between">
                        <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>

                        <div> <a className="btn btn-primary caro-btn" data-bs-toggle="collapse" href={ele.ref} role="button" aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-chevron-down mt-3 font14"></i></a> </div>

                    </div>

                    <div className="collapse" id="kitchen">
                        <div className="card card-body border-0">
                            <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>
                            <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>
                            <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>
                        </div>
                    </div>



                </div>
            )


        }
        else if (ele.ref === "#entertainment") {

            return (
                <div className=" d-flex flex-column ">
                    <div className=" d-flex flex-row justify-content-between">
                        <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>
                        <div> <a className="btn btn-primary caro-btn" data-bs-toggle="collapse" href={ele.ref} role="button" aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-chevron-down mt-3 font14"></i></a> </div>

                    </div>

                    <div className="collapse" id="entertainment">
                        <div className="card card-body border-0">
                            <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>
                            <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>
                        </div>
                    </div>
                </div>

            )


        } else if (ele.ref === "#books") {

            return (
                <div className=" d-flex flex-column">

                    <div className=" d-flex flex-row justify-content-between">
                        <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>

                        <div> <a className="btn btn-primary caro-btn" data-bs-toggle="collapse" href={ele.ref} role="button" aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-chevron-down mt-3 font14"></i></a> </div>

                    </div>


                    <div class="collapse" id="books">
                        <div className="card card-body border-0">
                            <div> <li className="li-itself"><a href="https://www.digikala.com/" className="li-a-itself ">  {ele.title}  </a></li></div>
                        </div>
                    </div>
                </div>

            )


        }
    });





    return (

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header ">
                <img src={image1} />

            </div>
            <div className="offcanvas-body ">
                <div className="offcanvas-header-divider">

                </div>
                <ul className="p-0 w-100">


                    <li className="nav-item li-itself"><a href="https://www.digikala.com/" className="nav-link nav-text"><li className="fa-solid fa-burger ms-2 font21"> </li> سوپر مارکت </a></li>
                    <li className="nav-item li-itself"><a href="https://www.digikala.com/" className="nav-link nav-text"><li className="fa-solid fa-fire ms-2 font21"> </li> پرفروش ترین ها</a></li>
                    <li className="nav-item li-itself"><a href="https://www.digikala.com/" className="nav-link nav-text"> <li className="fa-solid fa-percent ms-2 percent-icon font21"> </li> تخفیف ها و پیشنهاد ها</a></li>
                    <li className="nav-item li-itself"><a href="https://www.digikala.com/" className="nav-link nav-text"> <li className="fa-solid fa-percent ms-2 font21"> </li> شگفت انگیزها </a></li>
                    <li className="nav-item li-itself"><a href="https://www.digikala.com/" className="nav-link nav-text"> <i className="fa-regular fa-circle-question ms-2 font21"></i> سوالی دارید؟</a></li>
                    <li className="nav-item li-itself"><a href="https://www.digikala.com/" className="nav-link nav-text "><i className="fa-solid fa-house font21 ms-2"></i> فروشنده شوید!</a></li>

                </ul>
                <div className="offcanvas-header-divider">

                </div>
                <div>
                    <div>
                        <li className="nav-item li-itself"><a className="nav-link text-black"  >   دسته بندی کالاها </a></li>
                    </div>

                    {act}

                </div>

            </div>


        </div>
    )
}
