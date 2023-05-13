import React from 'react'
import {Redirect,Route} from 'react-router-dom'

const Protected = ({Component:Cmp,...rest})=> (
   
   <Route
    {...rest}
    render={(props)=>
        localStorage.getItem('login') ? (
            <Cmp {...props}/>
        ) : <Redirect to="/login" />
    }
   />
)
export default Protected