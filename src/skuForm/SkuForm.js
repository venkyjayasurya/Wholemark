import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
// import { TextField, Button } from "@material-ui/core";
import data from './list'
import {    
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Button,
    Paper,
} from '@material-ui/core';
import './SkuForm.css'

export const SkuForm = () => {
    const validationSchema = yup.object({
        firstName: yup.string().required("First Name is required"),
        lastName: yup.string().required("Last Name is required"),
        email: yup.string().email("Enter a valid email").required("Email is required"),
    })

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        },
        validationSchema: validationSchema
    })

    return (
        <div>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sku Name</TableCell>
                            <TableCell align="right">Id</TableCell>
                            <TableCell align="right">Owner</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.label}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.label}
                                </TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                                <TableCell align="right">{row.owner}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            
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
                    variant="outlined"
                />
                <TextField
                    id="LastName"
                    name="lastName"
                    label="Last Name"
                    margin="normal"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    variant="outlined"
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
                    variant="outlined"
                />
                <Button type="submit" variant="outlined" margin="normal">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default SkuForm;