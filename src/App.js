import React from "react";
import { Provider } from "react-redux";
import Comp2 from "./components/component2.jsx";
import Crousel from "./components/carousel.jsx";
import Digistyle from "./components/component4.jsx";
import Magic from "./components/component5.jsx";
import Navlittle from "./components/component3.jsx";
import Supermarket from "./components/supermarket.jsx";
import Baner from "./components/component7.jsx";
import Category from "./components/category.jsx";
import Bigbanner from "./components/bigbanner.jsx";
import Pishnehad from "./components/pishnehad.jsx";
import Famous from "./components/famous.jsx";
import Foursection from "./components/foursection.jsx"
import Twobanner from "./components/bigbanner2"
import Digiplus from "./components/digiplus.jsx";
import Digiclub from "./components/digiclub.jsx";
import Foursection2 from "./components/foursection2.jsx";
import Bestseller from "./components/bestseller.jsx";
import Selected from "./components/selected.jsx";
import Digimeg from "./components/digikalameg.jsx";
import Footer from "./components/footer.jsx";
import store from "./redux/store.js";



export default function Header() {

   return (
      <>
         <Provider store={store}>

            <Comp2 />
            <Navlittle />
            <Crousel />
            <Digistyle />
            <Magic />
            <Supermarket />
            <Baner />
            <Category />
            <Bigbanner />
            <Pishnehad />
            <Famous />
            <Twobanner />
            <Foursection />
            <Digiplus />
            <Digiclub />
            <Foursection2 />
            <Bestseller />
            <Selected />
            <Digimeg />
            <Footer />

         </Provider>


      </>
   )

}