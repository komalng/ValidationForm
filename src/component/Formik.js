import React from 'react';
import { useFormik } from 'formik';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';

const Details = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      date:'2017-05-24'
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      
      // date: Yup.string()
      //   // .date('select date')
      //   .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // console.log(formik.touched,"PPPPPPPPPPPPPPPPPPPPPPPPPPPPPP")
  return (
    <Container maxWidth="xs" component={Paper}>
    <h1>Formik</h1>

        <form onSubmit={formik.handleSubmit}>
          <TextField
              error={(formik.touched.firstName ? (formik.errors.firstName ? true : "") : false)}
              variant="outlined"
              margin="normal"
              fullWidth
              label="firstName"
              name="firstName"
              {...formik.getFieldProps('firstName')}
              helperText={formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
          />



          <TextField
            error={(formik.touched.lastName ? (formik.errors.lastName ? true : "") : false)}
            variant="outlined"
            fullWidth
            label = "lastName"
            name="lastName"
            {...formik.getFieldProps('lastName')}
            helperText={formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
          />
      

          <TextField
            error={(formik.touched.email ? (formik.errors.email ? true : "") : false)}
            variant="outlined"
            margin="normal"
            fullWidth
            label = "email"
            name="email"
            {...formik.getFieldProps('email')}
            helperText={formik.errors.email ? <div>{formik.errors.email}</div> : null}
          />

      

          <TextField
            error={(formik.touched.date ? (formik.errors.date ? true : "") : false)}
            name="date"
            label="Birthday"
            variant="outlined"
            fullWidth
            type="date"
            {...formik.getFieldProps('date')}
            helperText={formik.errors.date ? <div>{formik.errors.date}</div> : null}
        />

            <Button
            style = {{"marginTop":"10px","marginBottom":"10px"}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            >
            Submit
          </Button>    
        </form>
    </Container>
  );
}


export default Details;