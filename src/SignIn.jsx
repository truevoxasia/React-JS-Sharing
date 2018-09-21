import React from "react";
import { Grid, Paper, FormControl, TextField, withStyles, Button } from "../node_modules/@material-ui/core";

const signInStyle = {

}

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container>
                <Grid item xs={12} sm={12}>

                    <Grid container style={{ margin: 48 }}>
                        <Grid item xs={2} sm={2} md={2} lg={2}>
                        </Grid>
                        <Grid item xs={8} sm={8} md={8} lg={8}>
                            <Paper style={{ padding: 16 }}>

                                <form>
                                    <TextField
                                        fullWidth
                                        id="outlined-email-input"
                                        label="Email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        fullWidth
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <Button onClick={(e) => {
                                        localStorage.setItem("key", 123456);
                                        this.props.history.push('/');

                                    }} variant="contained" color="primary" >
                                        Sign In
                                    </Button>
                                </form>
                            </Paper>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}

export default withStyles(signInStyle)(SignIn);