const appStyle = theme => ({
    appHeader: {
        backgroundColor: "#000000",
        [theme.breakpoints.up("md")]: {
            backgroundColor: "#12560f",
        }
    },
    sorok: {
        display: "none"
    }
})

export default appStyle;