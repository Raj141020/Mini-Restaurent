import "../App.css";
import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Route,
    Link
  } 
  from 'react-router-dom';

class RestaurentList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    this.getData()
}
getData()
    {
        fetch("http://localhost:3000/restaurent").then((response) => {
      response.json().then((result) => {
        this.setState({ list: result });
      });
    });
    }
  
  delete(id)
  {
    fetch("http://localhost:3000/restaurent/"+id,{
        method:"DELETE",
        
    }).then((result)=>{
        result.json().then((resp)=>{
            alert("Restaurent Deleted")
            this.getData()
            // console.log(resp)
        })
    })

  }
  render() {
    return (
      <div>
        <h1>Restaurant List</h1>
        <Table striped bordered hover>
        <thead>
        
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Rating</th>
          <th>Address</th>
          <th>Email</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
  
  {this.state.list ? (
    this.state.list.map((item, i) => (
      <tr key={i}>
        <td>{i+1}</td>
        <td>{item.name}</td>
        <td>{item.Rating}</td>
        <td>{item.Address}</td>
        <td>{item.Email}</td>
        <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange"/></Link> 
        <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red"/></span></td>
      </tr>
    ))
  ) : (
    <p>Please wait...</p>
  )}
</tbody>
</Table>
      </div>
    );
  }
}

export default RestaurentList;
