import React, { useRef } from 'react';
import { Form, FormSpy, Field } from 'react-final-form';
import { TextField, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  MenuItem
} from '@material-ui/core';

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const validate = values => {
  const errors = {};
  if (!values.notes) {
    errors.notes = 'Required';
  }
  if (!values.country) {
    errors.country = 'Required';
  }
  if (!values.city) {
    errors.city = 'Required';
  }
  return errors;
};

function Reactfinal() {
  const valuesRef = useRef({});

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        🏁 React Final Form
      </Typography>

      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ form, handleSubmit, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <FormSpy
              subscription={{ values: true }}
              onChange={({ values }) => {
                let needReset = false;
                const next = { ...values };
                  if (values.country !== valuesRef.current.country) {
                  next.city = null;
                  needReset = true;
                }
                if (needReset) {
                  form.reset(next);
                }
                valuesRef.current = values;
              }}
            />

            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={8}>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="notes"
                    component={TextField}
                    multiline
                    label="Notes"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="country"
                    component={Select}
                    label="Select a Country"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="Nepal">Nepal</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="city"
                    component={Select}
                    label="Select a City"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="London">London</MenuItem>
                    <MenuItem value="Paris">Paris</MenuItem>
                  </Field>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
}


export default Reactfinal;