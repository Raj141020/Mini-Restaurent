import React, { Component } from "react";

class RestaurentCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      Email: null,
      Address: null,
      Rating: null,
    };
  }
  create() {
    fetch("http://localhost:3000/restaurent",{
        method:"Post",
        headers:{
            'Content-Type':'application/json'

        },
        body:JSON.stringify(this.state)
    }).then((result)=>{
        result.json().then((resp)=>{
            alert("Restaurent Added")
            console.log(resp)
        })
    })
    
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1>Restaurent Create</h1>
        <div>
          <input
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            placeholder="Restaurent Name"
          />
          <br></br>
          <br></br>
          <input
            onChange={(event) => {
              this.setState({ Email: event.target.value });
            }}
            placeholder="Restaurent Email"
          />
          <br></br>
          <br></br>
          <input
            onChange={(event) => {
              this.setState({ Rating: event.target.value });
            }}
            placeholder="Restaurent Rating"
          />
          <br></br>
          <br></br>
          <input
            onChange={(event) => {
              this.setState({ Address: event.target.value });
            }}
            placeholder="Restaurent Address"
          />
          <br></br>
          <br></br>
          <button
            onClick={() => {
              this.create();
            }}
          >
            Add Restaurent
          </button>
        </div>
      </div>
    );
  }
}

export default RestaurentCreate;
