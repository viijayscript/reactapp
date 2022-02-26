
import {CardContent, Card,Grid, Typography,makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => (
    {
        component:{
            //marginBottom: 20,
            boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 5px 0 rgb(0 0 0 / 12%)',
            background: 'green',
            color: 'lime',
            borderRadius: 11
        },
        container: {
            display: 'flex',
                padding : 5,
                paddingBottom:'1px!important'
        },
        rightcontainer:
        {
            margin: '1px 0px 0 -1px',
            display: 'flex',
            flexDirection:'column',
            [theme.breakpoints.down('sm')]:
            {
                margin: '1px 0'
            }
                
        },
        text:
        {
            marginTop: 11,
            marginLeft: 68,
            fontFamily: 'Paytone One',
            fontWeight: 50
        },
        textb:
        {
            fontWeight: 1000
        } 
    }))

const InfoHeader = () =>
{
    const classes = useStyles()
    return(
        
        <Card className={classes.component}>
        <CardContent className={classes.container}>
           <Grid container>
               <Grid item lg={7} md={7} sm={5} xs={12} className={classes.rightcontainer}>
                   <Typography className={classes.text}><p className='ressize'><b className={classes.textb}>ViijayScript</b> assist you to Boost your Knowledge</p></Typography>
               </Grid>
           </Grid>
        </CardContent>
   </Card>
       
    )
}

export default InfoHeader;