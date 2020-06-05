
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { useForm } from "react-hook-form";


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

export default function SignIn(pathName) {
  const { register, handleSubmit, watch, errors, setValue } = useForm();


  const onSubmit = e => {
    setValue("name", e.target.value);

  };
  const classes = useStyles();
  return (
    <Container maxWidth="xs" component={Paper}>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Partner Details
        </Typography>
        <form className={classes.form}  >
          <TextField
            type = "email"
            variant="outlined"
            margin="normal"
            // value={details.name}
            // onChange = {onChange}
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            ref={register({ required: true, maxLength: 10 })}

          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="notes"
            label="Notes"
            type="text"
            id="notes"
            ref={register({ required: true })}

          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="slug"
            label="Slug"
            type="text"
            id="slug"
            ref={register({ required: true })}
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
        </form>
      </div>
    </Container>
  );
}