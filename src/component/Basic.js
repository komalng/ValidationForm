import React,{useState} from "react";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Checkbox, Typography, Paper,Button , Container} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Bas() {
  const methods = useForm();
  const [details,setDetails] = useState({name:'',date:''});
  const { handleSubmit ,formState} = methods;
  const onChange = (e) => {
      console.log(details,"ONchagne")
      console.log(e.target)
      setDetails({...details,[e.target.name]:e.target.value})

  }
  const onSubmit = data => console.log(data);
  const classes = useStyles();
//   console.log(touched,"============")
  return (
    <Container maxWidth="xs" component={Paper}>
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
       React Hook Form
      </Typography>
      <form className={classes.form}  onSubmit={handleSubmit(onSubmit)} >
      
    <TextField 
    error ={details.name.length === 0 ? true : false }
    onChange = {onChange}
    type="text"
    name="name" 
    value = {details.name}
    variant="outlined"
    margin="normal"
    label = "Name"
    fullWidth
    />

<TextField 
    value = {details.date}
    type="date"
    name="date" 
    onChange = {onChange}
    variant="outlined"
    margin="normal"
    label = "Date"
    fullWidth
    />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit
        </Button>

  <pre>{JSON.stringify(formState,null,2)}</pre>
      </form>
    </div>
  </Container>
  );
}


export default Bas;