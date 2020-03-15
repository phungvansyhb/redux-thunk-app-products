import * as types from '../Contant/ActionTypes'
const initialState = {
    products:[],
    editProduct: {}
}


export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.FETCH_PRODUCTS:
        state.products = payload;
        return { ...state }

    case types.DELETE_PRODUCT:
      
        let afterDelete = state.products.filter((item) => {
            return item.id !== payload
        })
        state.products = afterDelete;
        return { ...state }

    case types.ADD_PRODUCT:
      
        let afterAdd = state.products.concat(payload)
        state.products = afterAdd;
        return { ...state }

    case types.EDIT_PRODUCT:
      
        let index = state.products.findIndex( (item) => { return  item.id === payload.id});
        state.products[index] = payload;

        return { ...state }

    case types.FETCH_EDIT_PRODUCT:
        state.editProduct = payload
        return {...state}
    default:
        return state
    }
}
