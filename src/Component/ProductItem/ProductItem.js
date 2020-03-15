import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class ProductItem extends Component {
    onDelete =(id) => {
        let isdelete = window.confirm("Ban chac chan muon xoa ?");
        if(isdelete) this.props.onDelete(id)
    }
    render() {
        
        let {item , index } = this.props
        let statusName = (item.status) ? "con hang" : "het hang"
        let statusClass = (item.status) ? "primary" : "warning"
        return (

            <tr>
                <td >{index+1}</td>
                <td>{item.id}</td>
                <td>{item.name} </td>
                <td>{item.price} </td>
                <td>
                    <span className={"badge badge-pill badge-" + statusClass}> {statusName}</span>
                </td>
                <td>
                    <Link to={"product/" + item.id+"/edit"} className="btn btn-success mr-3"> Sua</Link>
                   
                    <button type="button" className="btn btn-danger" onClick={ () => this.onDelete(item.id) } >Xoa</button>
                </td>
            </tr>

        )
    }
}
