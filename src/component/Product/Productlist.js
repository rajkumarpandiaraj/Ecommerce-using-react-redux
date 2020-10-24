import React,{useEffect} from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { handleOrderByValue, setSizeArr, handleSizeBy } from '../../Redux/action'

function Productlist(props) {
    const {productArr, orderByArr, sizeArr, setSizeArr,handleSizeBy, sizeByValue, handleOrderByValue, orderByValue, } = props;

    useEffect(() => {
        let tempSizeArr = [];
        productArr.forEach(product => {
            tempSizeArr = [...tempSizeArr,...product.availableSizes]
        });
        let sizeTempArr = new Array(...new Set(tempSizeArr));
        setSizeArr(sizeTempArr);

    }, [productArr, setSizeArr])

    return (
        <div className='product-container'>
            <div className='nav'>
                <h1>Online Cart</h1>
                <form className='form'>
                    <div className='form-grp'>
                        <label htmlFor='order'>OrderBy :</label>
                        <select id='order' value={orderByValue} onChange={handleOrderByValue}>
                            <option value='newest'>Newest</option>
                            <option value='lowest'>Lowest</option>
                            <option value='highest'>Highest</option>
                        </select>
                    </div>
                    <div className='form-grp'>
                        <label htmlFor='size'>Size :</label>
                        <select id='size' value={sizeByValue} onChange={handleSizeBy}>
                            <option value='ALL'>ALL</option>
                            {
                                sizeArr.map(size => <option value={size} key={size}>{size}</option>)
                            }
                        </select>
                    </div>
                </form>
            </div>
        <div className='hr'/>
            <div className='product-container-grid'>
                {
                    orderByArr.map(product => <Product key={product._id} product={product}/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        productArr : state.productArr,
        sizeArr : state.sizeArr,
        orderByValue : state.orderByValue,
        orderByArr : state.orderByArr,
        sizeByValue : state.sizeByValue
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setSizeArr : (sizeTempArr) => dispatch(setSizeArr(sizeTempArr)),
        handleOrderByValue : (e) => dispatch(handleOrderByValue(e)),
        handleSizeBy : (e) => dispatch(handleSizeBy(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Productlist)
