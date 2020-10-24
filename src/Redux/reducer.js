import data from '../data'
import { PRODUCT_ARR } from './actiontype';
import { SIZE_ARR } from './actiontype';
import { ADD_TO_CART } from './actiontype';
import { MODAL_PRODUCT } from './actiontype';
import { CALC_TOTAL } from './actiontype';
import { MODAL_CLOSE } from './actiontype';
import {  REMOVE_FROM_CART } from './actiontype';
import{ HANDLE_ORDER_BY } from './actiontype';
import{ HANDLE_SIZE_BY } from './actiontype';





const initialState ={
    productArr : data,
    sizeArr : [],
    cartArr : [],
    modalProduct : {},
    isModalOpened : false,
    total : 0,
    orderByValue : 'newest',
    orderByArr : data,
    sizeByValue : 'ALL'
}

const reducer = (state = initialState, action) =>{
    const {type, payload} = action;
    if(type === PRODUCT_ARR){
        console.log('success');
    }

    if(type === SIZE_ARR){
        return {...state, sizeArr : payload}
    }

    if(type === ADD_TO_CART){
        const isInCart = state.cartArr.find(product => product._id === payload)
        if(isInCart){
            const tempCartArr = state.cartArr.map(product => {
                if(product._id === payload){
                    const tempQuantity = +product.quantity + 1
                    const tempTotal = +tempQuantity * +product.price
                    return {...product, quantity : tempQuantity, total : tempTotal}
                }
                return product
            })
            return{...state, cartArr : tempCartArr}
        }else{
            const itemToAdd = state.productArr.find(product => product._id === payload)
            const tempQuantity = +itemToAdd.quantity + 1
            const tempTotal = +tempQuantity * +itemToAdd.price
            return {...state, cartArr : [...state.cartArr,{...itemToAdd, quantity : tempQuantity, total : tempTotal }]}    
        }
    }

    if(type === MODAL_PRODUCT){
        const tempModalProduct = state.productArr.find(product => product._id === payload)
        return {...state, isModalOpened : true, modalProduct : tempModalProduct}
    }

    if(type === MODAL_CLOSE){
        return {...state, isModalOpened : false}
    }

    if(type === CALC_TOTAL){
        const Total = state.cartArr.reduce((prev, curr) => {
            prev += curr.total
            return prev
        }, 0)

        return {...state, total : Math.ceil(Total)}
    }

    if(type === REMOVE_FROM_CART){
        const removeObj = state.cartArr.find(product => product._id === payload)
        if(removeObj.quantity === 1) {
            const tempCart = state.cartArr.filter(product => product._id !== payload);
            return {...state, cartArr : tempCart}
        } else {
            const temporaryCartArr = state.cartArr.map(product => {
                if(product._id === payload){
                    const tempQuantity = +product.quantity - 1
                    const tempTotal = +tempQuantity * +product.price
                    return {...product, quantity : tempQuantity, total : tempTotal}
                }
                return product
            })
            return{...state, cartArr : temporaryCartArr}
        }   
    }

    if(type === HANDLE_ORDER_BY){
        if(payload === 'lowest'){
            const tempOrderArr = state.orderByArr.sort((a,b) => (a.price > b.price)? 1 : -1)

            return {...state, orderByArr : tempOrderArr, orderByValue : payload};
        }

        if(payload === 'highest'){
            const tempOrderByArr = state.orderByArr.sort((a,b) => (a.price < b.price)? 1 : -1)
            return {...state, orderByArr : tempOrderByArr, orderByValue : payload};
        }

        if(payload === 'newest'){
            const tempOrderArr = state.orderByArr.sort((a,b) => (a._id > b._id)? 1 : -1)
            return {...state, orderByArr : tempOrderArr, orderByValue : payload};

        }
    }

    if(type === HANDLE_SIZE_BY){

        if(payload === 'ALL'){
            if(state.orderByValue === 'newest'){
                const tempArr = state.productArr.sort((a,b) => (a._id > b._id)? 1 : -1)
                return {...state, orderByArr : tempArr,  sizeByValue : payload}
            }

            if(state.orderByValue === 'lowest'){
                const tempArr = state.productArr.sort((a,b) => (a.price > b.price)? 1 : -1)
                return {...state, orderByArr : tempArr,  sizeByValue : payload}
            }

            if(state.orderByValue === 'highest'){
                const tempArr = state.productArr.sort((a,b) => (a.price < b.price)? 1 : -1)
                return {...state, orderByArr : tempArr,  sizeByValue : payload}
            }
        }
        if(state.orderByValue === 'newest'){
            const tempSize = state.productArr.filter(product => product.availableSizes.includes(payload))
            const tempArr = tempSize.sort((a,b) => (a._id > b._id)? 1 : -1)
            return {...state, orderByArr : tempArr,  sizeByValue : payload}
        }

        if(state.orderByValue === 'lowest'){
            const tempSize = state.productArr.filter(product => product.availableSizes.includes(payload))
            const tempArr = tempSize.sort((a,b) => (a.price > b.price)? 1 : -1)
            return {...state, orderByArr : tempArr,  sizeByValue : payload}
        }

        if(state.orderByValue === 'highest'){
            const tempSize = state.productArr.filter(product => product.availableSizes.includes(payload))
            const tempArr = tempSize.sort((a,b) => (a.price < b.price)? 1 : -1)
            return {...state, orderByArr : tempArr,  sizeByValue : payload}
        }
        
    }

    return state
}

export default reducer;