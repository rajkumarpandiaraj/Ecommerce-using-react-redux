import data from '../data'
import { PRODUCT_ARR } from './actiontype';
import { SIZE_ARR } from './actiontype';



const initialState ={
    productArr : data,
    sizeArr : [],
    cartArr : data
}

const reducer = (state = initialState, action) =>{
    const {type, payload} = action;
    if(type === PRODUCT_ARR){
        console.log('success');
    }

    if(type === SIZE_ARR){
        return {...state, sizeArr : payload}
    }
    return state
}

export default reducer;