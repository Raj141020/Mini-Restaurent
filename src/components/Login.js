import React, { Component } from 'react';

class Login extends Component {
    constructor()
    {
        super();
        this.state={
            name:'',
            password:''
        }
    }
    login()
    {
        console.log(this.state)
        
        fetch("http://localhost:3000/login?q=" + this.state.name).then((response) => {
          response.json().then((result) => {
            console.log("result", result);
              if(result.length>0){
                localStorage.setItem('login',JSON.stringify(result))
                console.log(this.props.history.push('list'))

              } else {
                alert("Please check user name and password")
              }
            
          });
        });
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter Name" name="user" onChange={(event)=>this.setState({name:event.target.value})}/>
                <br></br>
                <br></br>
                <input type="password" placeholder="Enter Password" name="password" onChange={(event)=>this.setState({password:event.target.value})}/>
                <br></br>
                <br></br>
                <button onClick={()=>{this.login()}}>Login</button>
            </div>
        );
    }
}

export default Login;