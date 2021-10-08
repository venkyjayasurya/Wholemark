import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";

export const Editlist = () => {
    const validationSchema = yup.object({
        firstName: yup.string().required("First Name is required"),
        sellerName: yup.string().required("Last Name is required"),
        productName: yup.string().required("productName is required"),
        price: yup.string().required("enter the price"),
        quantity: yup.string().required("quantity cannot be empty")
    })

    const formik = useFormik({
        initialValues: {
            productID: "",
            sellerName: "",
            productName: "",
            price: "",
            quantity: ""
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        },
        validationSchema: validationSchema
    })

    return (
        <div>

            <form onSubmit={formik.handleSubmit}>
                <TextField
                    id="productID"
                    name="productID"
                    label="ProductID"
                    margin="normal"
                    value={formik.values.productID}
                    onChange={formik.handleChange}
                    error={formik.touched.productID && Boolean(formik.errors.productID)}
                    helperText={formik.touched.productID && formik.errors.productID}
                    variant="outlined"
                    disabled="true"
                />

                <TextField
                    id="productName"
                    name="productName"
                    label="productName"
                    margin="normal"
                    value={formik.values.productName}
                    onChange={formik.handleChange}
                    error={formik.touched.productName && Boolean(formik.errors.productName)}
                    helperText={formik.touched.productName && formik.errors.productName}
                    variant="outlined"
                    disabled="true"
                />

                <TextField
                    id="sellerName"
                    name="sellerName"
                    label="sellerName"
                    margin="normal"
                    value={formik.values.sellerName}
                    onChange={formik.handleChange}
                    error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
                    helperText={formik.touched.sellerName && formik.errors.sellerName}
                    variant="outlined"
                    
                />
                
                <TextField
                    id="quantity"
                    name="quantity"
                    label="quantity"
                    margin="normal"
                    value={formik.values.quantity}
                    onChange={formik.handleChange}
                    error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                    helperText={formik.touched.quantity && formik.errors.quantity}
                    variant="outlined"
                    
                />
                <TextField
                    id="price"
                    name="price"
                    label="price"
                    margin="normal"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
                    variant="outlined"
                />
                <Button type="submit" variant="outlined" margin="normal">
                    Save
                </Button>
                </form>      
        </div>
    )
}

export default Editlist;