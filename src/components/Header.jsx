
import {AppBar, makeStyles, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(
    {
        header : {
            background :'lime',
            height : 77
        },
        
        logo :
        {
            height: 77,
            margin:'auto',
            padding: 14,
            color: 'green',
            fontFamily: 'Paytone One'
        }
    }
)

const Header =() => {
    const classes = useStyles();

    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <h1 className={classes.logo}>ViijayScript</h1>
            </Toolbar>
        </AppBar>


    )
}

export default Header
