import React from "react";
import Header from "../core/header/Header";
import Footer from "../core/footer/Footer";
import Container from "../components/container/Container";
import { useFormik } from 'formik';
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const CreateRecipe = (props) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
        },
        validate: values => {
            const errors = {};

            if (!values.firstName) {
                errors.firstName = "Required"
            }

            return errors;
        },
        onSubmit: values => {
            console.log(values, "values");
        },
    });
    return (
        <>
            <Header />
            <Container>
                <Box pt={15}>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid
                            container
                            direction="column"
                            justify="flex-end"
                            alignItems="center"
                        >


                            <Grid
                                item
                                xs={12}
                                container
                                direction="column"
                                justify="flex-start"
                                alignItems="flex-start"
                            >

                                <Grid item>
                                    <Typography>
                                        First Name *
                                    </Typography>

                                    <TextField
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        variant="outlined"
                                        color="primary"
                                        type="text"
                                        margin="normal"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                        error={!!formik.errors.firstName}
                                        helperText={formik.errors.firstName}

                                    />
                                </Grid>

                                <Grid item>
                                    <Typography>
                                        Last Name
                                    </Typography>

                                    <TextField
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        variant="outlined"
                                        color="primary"
                                        type="text"
                                        margin="normal"
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                    />
                                </Grid>

                            </Grid>

                            <Grid item>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Submit
                                </Button>

                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
            <Footer />
        </>
    )

};


export default CreateRecipe;
