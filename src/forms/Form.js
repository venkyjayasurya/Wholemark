import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";
import './form.css'

const Form = () => {

  const validationSchema = yup.object({
    firstName : yup.string().required("First Name is required"),
    lastName : yup.string().required("Last Name is required"),
    email : yup.string().email("Enter a valid email").required("Email is required"),
  })


    const formik = useFormik({
        initialValues: {
            firstName : "",
            lastName: "",
            email: "",
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values))
        },
        validationSchema: validationSchema        
    })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          margin="normal"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          id="LastName"
          name="LastName"
          label="Last Name"
          margin="normal"
          value={formik.values.LastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button type="submit" variant="outlined" margin="normal">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
