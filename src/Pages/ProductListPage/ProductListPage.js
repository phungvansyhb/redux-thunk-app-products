import React, { Component } from 'react'
import ProductList from '../../Component/ProductList/ProductList'
import ProductItem from '../../Component/ProductItem/ProductItem'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {FetchProductsRequest ,DeleteProductRequest} from '../../Actions'
//import ApiCaller from '../../utils/ApiCaller'

class ProductListPage extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    componentDidMount() {
       this.props.FetchProductsRequest()
    }
    showDelete =(id) => {
        this.props.DeleteProductRequest(id)
    }
   
    showProduct = (products) => {
        var result = null;
        if (products.length > 0) {
            return products.map((item, key) => {
                return <ProductItem item={item} index={key} key={key} onDelete = {this.showDelete}/>
            })
        }
        return result
    }
    render() {
        return (
            <div>
                <ProductList>
                    {this.showProduct(this.props.products)}
                </ProductList>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products.products
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators( {
        FetchProductsRequest : FetchProductsRequest  ,
        DeleteProductRequest : DeleteProductRequest
     }, dispatch),
})
export default connect(mapStateToProps , mapDispatchToProps)(ProductListPage)