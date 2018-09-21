import React from "react"
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={
            props => {
                if (rest.path.includes("signin")) {
                    // localStorage.setItem("key", "123456");
                    // return (<Redirect to="/" />)
                }
                else if (rest.path.includes("signout")) {
                    localStorage.removeItem("key");
                    return (<Redirect to="/" />)
                }

                const auth = localStorage.getItem("key");
                console.log(rest.path)
                return auth || rest.path.endsWith("/signin") ?
                    <Component {...props} /> :
                    <Redirect to="/signin" />
            }
        }
    />
)

export default PrivateRoute;