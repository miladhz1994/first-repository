import {

    PRODUCT_SUCCESS, PRODUCT_ERROR

} from "./actiontypes"

import axios from "axios";

export const productsuccess = product => {

    return {

        type: PRODUCT_SUCCESS,
        payload: product,
    }
}
export const producterror = error => {

    return {

        type: PRODUCT_ERROR,
        payload: error,
    }
}

export const getproducts = () => {


    return (dispatch) => {


        axios.get('https://fakestoreapi.com/products').then(res => dispatch(productsuccess(res.data))).catch(err => dispatch(producterror(err.message)))
    }
}







