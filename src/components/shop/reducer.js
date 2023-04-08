import {
    PRODUCT_ERROR,
    PRODUCT_SUCCESS

} from "./actiontypes"
import { combineReducers } from "redux"

const proinitial = {

    products: [],
    error: ""
}

const productreducer = (state = proinitial, action) => {

    switch (action.type) {

        case PRODUCT_SUCCESS: return {
            ...state,
            products: action.payload


        }
        case PRODUCT_ERROR: return {
            ...state,
            error: action.payload

        }
        default: return state
    }

}

export const rootreducer = combineReducers({

    productsss: productreducer
})








