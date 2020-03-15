import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class ProductList extends Component {
    
    render() {
        
        return (
            <div className="container mt-5">
                <Link to="/product/add" className="btn btn-primary">Them san pham</Link>
               
                 <table className="table  mt-5 background">
                <thead>
                    <tr>
                        <th scope="row">STT</th>
                        <th>Ma</th>
                        <th>Ten</th>
                        <th>Gia</th>
                        <th>Trang Thai</th>
                        <th>Hanh Dong</th>
                    </tr>
                </thead>
                <tbody>
                  {this.props.children}
                </tbody>
            </table>
            </div>
        )
    }
}
