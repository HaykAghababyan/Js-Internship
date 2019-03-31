import React, { Component } from 'react';

class Form extends Component {

    render(){

     return <form onSubmit={this.props.onSubmit} onChange={this.props.onChange}>
               <input  type='text' name ='id' placeholder='id'/><br></br>
               <input  type='text' name ='balance' placeholder='balance'/><br></br>
               <input  type='text' name ='picture' placeholder='picture'/><br></br>
               <input  type='text' name ='age'     placeholder='age'/><br></br>
               <input  type='text' name ='name'    placeholder='name'/><br></br>
               <input  type='text' name ='gender'  placeholder='gender'/><br></br>
               <input  type='text' name ='company' placeholder='company'/><br></br>
               <input  type='text' name ='email'   placeholder='email'/><br></br>
               <input  type='submit' value = 'ADD'/>
               <input  type='button' onClick = {this.props.onEdit} value = 'Edit'/>
            </form>
    }
}  
export default Form;