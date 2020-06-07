import React from "react";
import {useForm } from "react-hook-form";
import {TextField} from "@material-ui/core"
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export default function ReactFinalForm() {
  const { register, handleSubmit, watch,  formState} = useForm();
  const onSubmit = data => {alert(JSON.stringify(data, null, 2));};
  // console.log(watch("firstName","umar"),"===========================");
  return (
  
    <Container component={Paper} maxWidth="xs">
    <h1>React Hook Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    
    <div style={{marginTop:"20px"}}>
    
      <TextField
        error={(formState.touched.firstName ? (watch("firstName").length ? false : true) : "") }
        fullWidth
        // value = {watch("firstName","umar")}
        name="firstName"
        label="firstName"
        variant="outlined"
        inputRef={register({required:true})} 
        helperText={(formState.touched.firstName ? (watch("firstName").length ? null : "This field is required") : null)}
       />
  
      
    </div>

    <div style={{marginTop:"20px"}}>

      <TextField
        error={(formState.touched.lastName ? (watch("lastName").length ? false : true) : "") }
        fullWidth
        name="lastName"
        label="lastName"
        variant="outlined"
        inputRef={register({required:true})}
        helperText={(formState.touched.lastName ? (watch("lastName").length ? null : "This field is required") : null)}
      />
    </div>

    <div style={{marginTop:"20px"}}>
      <TextField
        error={(formState.touched.email ? (watch("email").length ? false : true) : "") }
        fullWidth
        name="email"
        label="email"
        variant="outlined"
        inputRef={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })}
        helperText={(formState.touched.email ? (watch("email").length ? null : "This field is required") : null)}
      />
    </div>
    <div style={{marginTop:"20px"}}>
      <TextField
      id="date"
      name="date"
      label="Birthday"
      type="date"
      defaultValue="2017-05-24"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      inputRef={register({reuired:true})}
      fullWidth
    />
        
      </div>
      <div>
      <Button
      style = {{"marginTop":"10px","marginBottom":"10px"}}
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      >
      Submit
    </Button>
      </div>

    </form>
    </Container>
  );

}