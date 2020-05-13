import React from "react";
import Header from "../core/header/Header";
import Footer from "../core/footer/Footer";
import Container from "../components/container/Container";
import { useFormik } from 'formik';
import TextField from "@material-ui/core/TextField";

const CreateRecipe = (props) => {
const formik = useFormik({
    initialValues: {
      firstName: ''
    },
    onSubmit: values => {
      console.log(values, "values");
    },
  });
    return (
        <>
            <Header />
               <Container>
                <form onSubmit={formik.handleSubmit}>
                 <TextField
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                 />
                </form>
               </Container>
            <Footer />
        </>
    )

};


export default CreateRecipe;
