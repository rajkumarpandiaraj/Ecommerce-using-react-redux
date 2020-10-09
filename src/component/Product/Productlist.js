import React,{useEffect} from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { setSizeArr } from '../../Redux/action'

function Productlist(props) {
    const {productArr, sizeArr, setSizeArr} = props;

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
                        <select id='order'>
                            <option value='newest'>Newest</option>
                            <option value='lowest'>Lowest</option>
                            <option value='highest'>Highest</option>
                        </select>
                    </div>
                    <div className='form-grp'>
                        <label htmlFor='size'>Size :</label>
                        <select id='size'>
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
                    productArr.map(product => <Product key={product._id} product={product}/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        productArr : state.productArr,
        sizeArr : state.sizeArr
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setSizeArr : (sizeTempArr) => dispatch(setSizeArr(sizeTempArr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Productlist)
