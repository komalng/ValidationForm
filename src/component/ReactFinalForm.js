import React, { useRef } from 'react';
import { Form, FormSpy, Field } from 'react-final-form';
import {  Select } from 'final-form-material-ui';
import TextField  from '@material-ui/core/TextField';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  MenuItem,
  Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



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


function Reactfinal() {
  const valuesRef = useRef({});
  const classes = useStyles();
  return (
    <Container maxWidth = 'xs' component = {Paper} >
      <div className = {classes.paper} >
      <Typography component="h1" variant="h4">
     🏁 React Final Form
        </Typography>
        <form className = {classes.form}>
        <Form onSubmit={handleSubmit} noValidate>   
             
      </Form>
        </form>
      </div>
    </Container>
//   <Form
    //     onSubmit={onSubmit}
    //     validate={validate}
    //     render={({ form, handleSubmit, submitting, pristine, values }) => (
    //       <form onSubmit={handleSubmit} noValidate>
    //         <FormSpy
    //           subscription={{ values: true }}
    //           onChange={({ values }) => {
    //             let needReset = false;
    //             const next = { ...values };
    //               if (values.country !== valuesRef.current.country) {
    //               next.city = null;
    //               needReset = true;
    //             }
    //             if (needReset) {
    //               form.reset(next);
    //             }
    //             valuesRef.current = values;
    //           }}
    //         />

    //         <Paper style={{ padding: 16 }}>
    //           <Grid container alignItems="flex-start" spacing={8}>
    //             <Grid item xs={12}>
    //               <TextField
    //                 fullWidth
    //                 variant="contained"

    //                 name="notes"
    //                 // component={TextField}
    //                 multiline
    //                 label="Notes"
    //               />
    //             </Grid>
    //             <Grid item xs={12}>
    //               <Field
    //                 fullWidth
    //                 name="country"
    //                 component={Select}
    //                 label="Select a Country"
    //                 formControlProps={{ fullWidth: true }}
    //               >
    //                 <MenuItem value="India">India</MenuItem>
    //                 <MenuItem value="Nepal">Nepal</MenuItem>
    //               </Field>
    //             </Grid>
    //             <Grid item xs={12}>
    //               <Field
    //                 fullWidth
    //                 name="city"
    //                 component={Select}
    //                 label="Select a City"
    //                 formControlProps={{ fullWidth: true }}
    //               >
    //                 <MenuItem value="London">London</MenuItem>
    //                 <MenuItem value="Paris">Paris</MenuItem>
    //               </Field>
    //             </Grid>
    //             <Grid item style={{ marginTop: 16 }}>
    //               <Button
    //                 type="button"
    //                 variant="contained"
    //                 onClick={form.reset}
    //                 disabled={submitting || pristine}
    //               >
    //                 Reset
    //               </Button>
    //             </Grid>
    //             <Grid item style={{ marginTop: 16 }}>
    //               <Button
    //                 variant="contained"
    //                 color="primary"
    //                 type="submit"
    //                 disabled={submitting}
    //               >
    //                 Submit
    //               </Button>
    //             </Grid>
    //           </Grid>
    //         </Paper>
    //       </form>
    //     )}
    //   />
    // </div>
  );
}


export default Reactfinal;