import React, { Component } from 'react';

class AddProduct extends Component{

    constructor(props){
      super(props);
      this.state = {
        _id: "",
        name: "",
        price: "",
        inStock: false
      };
    }
//Generic function
    onChangeHandler = (event) => {
      // console.log('event is: ', event.target)

      //name is = to the input name for the form and sets the value that corresponds to that name
      let { name, value } = event.target
      console.log(name, value);
      
      //CASE of checkbox
      if(name === 'inStock' && value === 'on'){
        value = true;
      }

      this.setState({ [name]:value });
    }

    handleFormSubmit(event){
      event.preventDefault();
      this.props.productAddition(this.state);
      this.setState({
        _id: "",
        name: "",
        price: "",
        inStock: false
      });
    }

    render(){
      return(
        <div>
          <h2>Add New Product</h2>
          {/* handleFormSubmit => this is the way we call the method, can call it whatever we want */}
          <form onSubmit={ event => this.handleFormSubmit(event)} >
            <label>ID:</label>
            <input 
            //onChangeHandler this is the name we give it
                   onChange={ event => this.onChangeHandler(event) }
                   name="_id"
                   type="text"
                   value={ this.state._id }
            />
            <br />
            <label>Name:</label>
            <input 
                   onChange={ event => this.onChangeHandler(event) }
                   name="name"
                   type="text"
                   value={ this.state.name }
            />
            <br />
            <label>Price</label>
            <input 
                   onChange={ event => this.onChangeHandler(event) }
                   name="price"
                   type="tnumberext"
                   value={ this.state.price }
            />
            <br />
            <label>In Stock</label>
            <input 
                   onChange={ event => this.onChangeHandler(event) }
                   name="inStock"
                   type="checkbox"
                   checked={ this.state.inStock }
            />
            <br />
            <button>Save new product</button>
          </form>
        </div>
      )
    }
}

export default AddProduct;