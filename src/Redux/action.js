import { PRODUCT_ARR } from './actiontype';
import { SIZE_ARR } from './actiontype';

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