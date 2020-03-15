import React, { Component } from 'react'
//import CallApi from '../../utils/ApiCaller'
import {connect} from 'react-redux'
import {AddProductRequest ,EditProductRequest,FetchEditProductRequest} from '../../Actions'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'

class ProductActionPage extends Component {
    constructor(props, context) {
        super(props, context)
        this.state={
            id:'',
            name:'',
            price:'',
            status:false
        }
    }
    componentDidMount() {
        if( this.props.match ){
            const {id} = this.props.match.params;
            this.props.FetchEditProductRequest(id)
        }       
    }
    
    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps){
            let item =  nextProps.editProduct 
            this.setState({
                id: item.id,
                name: item.name,
                price: item.price,
                status: item.status
            })
        }
    }
    onChange =(e) => {
        var name = e.target.name;
        var value = e.target.type=== "checkbox" ? e.target.checked : e.target.value;
        this.setState({
            [name] : value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        var ProductObj = {
            id: this.state.id,
            name : this.state.name,
            price : this.state.price,
            status: this.state.status
        }
        if(this.state.id){
            this.props.EditProductRequest(ProductObj);
        }else{
            this.props.AddProductRequest(ProductObj);
        } this.props.history.goBack()
    }
    render() {
        
        return (
            <form className="container mt-5" onSubmit = {(e)=>this.onSubmit(e)}>
                <div className="form-group">
                  <label >Ten san pham</label>
                  <input type="text" className="form-control" name="name"  aria-describedby="emailHelpId"
                   required onChange={ (e) => { this.onChange(e)}} value={this.state.name} />
                  <small id="emailHelpId" className="form-text text-muted">ten san pham viet thuong ko dau</small>
                </div>
                <div className="form-group">
                  <label >Gia</label>
                  <input type="number" className="form-control" name="price" aria-describedby="emailHelpId" 
                  required onChange = {(e) => {this.onChange(e)}} value={this.state.price}/>
                  <small id="emailHelpId" className="form-text text-muted">Gia cua san phan tinh theo dolar</small>
                </div>
                <div className="form-group">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"  name="status" onChange ={(e) => { this.onChange(e)}}
                            checked ={this.state.status}/>
                             Con hang
                        </label>
                    </div>
                </div>
                
                <button type="submit" className="btn btn-danger" >Submit</button>
                <Link  className="btn btn-primary ml-3" to="/products" role="button">Quay lai</Link>
                
            </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        AddProductRequest:AddProductRequest,
        EditProductRequest:EditProductRequest,
        FetchEditProductRequest:FetchEditProductRequest
    }, dispatch),
})
const mapStateToProps = (state, ownProps) => {
    return {
     
        editProduct : state.products.editProduct
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)