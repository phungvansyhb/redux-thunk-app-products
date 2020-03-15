import React from 'react'
import HomePage from './Pages/HomePage/HomePage';
import NotFound from './Pages/NotFoundPage/NotFound';
import ProductListPage from './Pages/ProductListPage/ProductListPage';
import ProductActionPage from './Pages/ProductActionPage/ProductActionPage';

const routes = [
    {
        path:"/",
        exact: true,
        component : ()=> <HomePage/>
    },
    {
        path:"/products",
        exact: false ,
        component : ({history })=> <ProductListPage history={history } /> 
    },
    {
        path:'/product/add',
        exact: false ,
        component : ({history}) => <ProductActionPage history ={history} /> 
    },
    {
        path:'/product/:id/edit',
        exact: false ,
        component : ({match ,history}) => <ProductActionPage match= {match} history = {history}/> 
    },
    {
        path:'*',
        exact: false ,
        component : ()=> <NotFound/> 
    }
   
]
export default routes;