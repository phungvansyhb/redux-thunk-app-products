import {combineReducers} from 'redux'
import products from './ProductReducer'
const allReducer =combineReducers({
    products : products
})
export default allReducer;