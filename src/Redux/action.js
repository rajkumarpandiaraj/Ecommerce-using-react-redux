import { PRODUCT_ARR } from './actiontype';
import { SIZE_ARR } from './actiontype';
import { ADD_TO_CART } from './actiontype';
import{ MODAL_PRODUCT } from './actiontype';
import{ MODAL_CLOSE } from './actiontype';
import{ CALC_TOTAL } from './actiontype';
import{ REMOVE_FROM_CART } from './actiontype';
import{ HANDLE_ORDER_BY } from './actiontype';
import{ HANDLE_SIZE_BY } from './actiontype';

export const productArr = () =>{
    return {
        type : PRODUCT_ARR
    }
}

export const setSizeArr = (sizeTempArr) =>{
    return {
        type : SIZE_ARR,
        payload : sizeTempArr
    }
}

export const addToCart = (id) =>{
    return {
        type : ADD_TO_CART,
        payload : id
    }
}

export const modalProduct = id => {
    return {
        type : MODAL_PRODUCT,
        payload : id
    }
}

export const modalClose = () => {
    return {
        type : MODAL_CLOSE,
    }
}

export const calcTotal = () => {
    return {
        type : CALC_TOTAL,
    }
}

export const removeFromCart = (id) =>{
    return {
        type : REMOVE_FROM_CART,
        payload : id
    }
}

export const handleOrderByValue = (e) =>{
    return {
        type : HANDLE_ORDER_BY,
        payload : e.target.value,
    }
}

export const handleSizeBy = (e) =>{
    return {
        type : HANDLE_SIZE_BY,
        payload : e.target.value,
    }
}
