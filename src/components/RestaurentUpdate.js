import React, { Component } from "react";

class RestaurentUpdate extends Component {
    constructor()
    {
        super();
        this.state={
            name: null,
            Email: null,
            Address: null,
            Rating: null,
            id:null
        }
    }
    componentDidMount()
    {
        fetch("http://localhost:3000/restaurent/"+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                // console.warn(result)
              this.setState({ 
                name:result.name,
                Email:result.Email,
                id:result.id,
                Rating:result.Rating,
                Address:result.Address
               });
            });
          });
    }

    getData()
    {
        fetch("http://localhost:3000/restaurent").then((response) => {
      response.json().then((result) => {
        this.setState({ list: result });
      });
    });
    }

    update() 
    {
        fetch("http://localhost:3000/restaurent/"+this.state.id,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'

        },
        body:JSON.stringify(this.state)
    }).then((result)=>{
        result.json().then((resp)=>{
            alert("Restaurent Updated")
            // console.log(resp)
        })
    })

    }
  render() {
    console.warn(this.state);
    return (
      <div>
        <h1>Restaurent Update</h1>
        <div>
          <input
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            placeholder="Restaurent Name" value={this.state.name}
          />
          <br></br>
          <br></br>
          <input
            onChange={(event) => {
              this.setState({ Email: event.target.value });
            }}
            placeholder="Restaurent Email" value={this.state.Email}
          />
          <br></br>
          <br></br>
          <input
            onChange={(event) => {
              this.setState({ Rating: event.target.value });
            }}
            placeholder="Restaurent Rating" value={this.state.Rating}
          />
          <br></br>
          <br></br>
          <input
            onChange={(event) => {
              this.setState({ Address: event.target.value });
            }}
            placeholder="Restaurent Address" value={this.state.Address}
          />
          <br></br>
          <br></br>
          <button
            onClick={() => {
              this.update();
            }}
          >
            Update Restaurent
          </button>
        </div>
      </div>
    );
  }
}

export default RestaurentUpdate;
