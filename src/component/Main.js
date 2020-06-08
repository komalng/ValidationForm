import React, { Component } from 'react'
import history from "./history"
import { Button }from '@material-ui/core';
export class Main extends Component {

    ReactHookFormHandler =()=>{
        history.push("/ReactHookForm")
    }

    BasicHandler =()=>{
        history.push("/Basic")
    }

    ReactFinalFormHandler =()=>{
        history.push("/ReactFinalForm")
    }




    render() {
        return (
            <div>
            <h1>Welcome to React Form Validators</h1>
            <h1>With Material Ui</h1>
            <Button color="inherit" onClick={this.ReactHookFormHandler} style={{backgroundColor:"Brown"}}>React Hook Form</Button>
            <Button color="inherit" onClick={this.BasicHandler} style={{backgroundColor:"Brown",marginLeft:20}}>Formik</Button>
            <Button color="inherit" onClick={this.ReactFinalFormHandler} style={{backgroundColor:"Brown",marginLeft:20}}>React Final Form</Button>
        
            </div>
        )
    }
}

export default Main