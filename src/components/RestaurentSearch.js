import React, { Component } from "react";
import "../App.css";
import {Table, Form, Container} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import {
    Link
  } 
  from 'react-router-dom';

class RestaurentSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false,
      lastSearch:"",
    };
  }
  search(key) {
    console.log(key);
    this.setState({lastSearch:key})
    fetch("http://localhost:3000/restaurent?q=" + key).then((response) => {
      response.json().then((result) => {
        console.log("result", result);
        if (result.length > 0) {
          this.setState({ searchData: result, noData: false });
        } 
        else {
          this.setState({ searchData: null, noData: true });
        }
        if (key.length === 0) {
            this.setState({ searchData: null });
          }
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
            this.search(this.state.lastSearch)
            // console.log(resp)
        })
    })

  }
  render() {
    return (
      <Container>
        <h1>Restaurent Search</h1>
        
        <Form.Control type="text" onChange={(event) => this.search(event.target.value)} placeholder="Search Restaurent" />
        <div>
          {this.state.searchData ? 
            <div>
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

              {this.state.searchData.map((item,i) => (
                 <tr key={i}>
                 <td>{i+1}</td>
                 <td>{item.name}</td>
                 <td>{item.Rating}</td>
                 <td>{item.Address}</td>
                 <td>{item.Email}</td>
                 <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange"/></Link> 
                 <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red"/></span></td>
               </tr>
              ))}
              </tbody>
             </Table>
            </div>
           : ""
          }
          {this.state.noData ? <h3>No Data Found</h3> : null}
        </div>
      </Container>
    );
  }
}

export default RestaurentSearch;
