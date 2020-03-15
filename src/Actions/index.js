import * as types from '../Contant/ActionTypes'
import ApiCaller from '../utils/ApiCaller'

// load product
export const FetchProducts = (products) => ({
    type: types.FETCH_PRODUCTS,
    payload: products
})
export const FetchProductsRequest = () => {
    return (dispatch) => {
        ApiCaller("products", "GET", null).then((res) => {
            dispatch(FetchProducts(res.data))
        })
    }
}

//Delete product
export const DeleteProduct = (id) => ({
    type: types.DELETE_PRODUCT,
    payload: id
})

export const DeleteProductRequest = (id) => {
    return (dispatch) => {
        ApiCaller(`products/${id}`, "DELETE", null).then(() => {
            dispatch(DeleteProduct(id));
        })
    }

}

// Add product
export const AddProduct = (product) => ({
    type: types.ADD_PRODUCT,
    payload: product
})
export const AddProductRequest = (product) => {
    return (dispatch) => {
        ApiCaller("products", "POST", { name: product.name, price: product.price, status: product.status }).then(
            (res) => { dispatch(AddProduct(res.data)) ; }
        )
    }
}
// Edit product
export const EditProduct = (product) => ({
    type: types.EDIT_PRODUCT,
    payload: product
})
export const EditProductRequest = (product) => {
    return (dispatch) => {
        ApiCaller(`products/${product.id}`, "PUT", product).then(
            (res) => { dispatch(EditProduct(res.data)) ;  }
            )
    }
}
export const FetchEditProduct = (product) => ({
    type: types.FETCH_EDIT_PRODUCT,
    payload: product
})

export const FetchEditProductRequest = (id) => {
    return (dispatch) => {
        ApiCaller(`products/${id}`, "GET", null).then((res) => {
            dispatch(FetchEditProduct(res.data))
        })
    }
}
