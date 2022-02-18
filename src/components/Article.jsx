import { CardContent, Card, Grid, makeStyles,Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Data from "./data.json";




const useStyles = makeStyles(theme => (
    {
        component:{
            marginBottom: 20,
            boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 11px 0 rgb(0 0 0 / 12%)'
        },
        container: {
            display: 'flex',
                padding : 5,
                paddingBottom:'5px!important'
        },
        frame:{
            padding: 20
        },
        image:
        {
            height: 266,
            width:"86%",
            borderRadius: 5,
            objectFit: "cover"
        },
        rightcontainer:
        {
            margin: '5px 0px 0 -23px',
            display: 'flex',
            flexDirection:'column',
            [theme.breakpoints.down('sm')]:
            {
                margin: '5px 0'
            }
                
        },
        title:{
            color: 'green',
            fontSize: 23,
            lineHeight: '23px',
            fontFamily : 'Paytone One'
        },
        author:{
            fontSize: 14,
            color:'limegreen',
            lineHeight: '23px',
            fontFamily : 'Paytone One'
        },
        description:
        {
            lineHeight:'23px',
            color:'green',
            marginTop: 5,
            fontFamily : 'Paytone One'
        },
        publisher:
        {
            fontSize: 14,
            color:'green',
            marginBottom: 11,
            marginTop: 'auto',
            '& > *':{
                textDecoration: 'none',
                color:'green',
                fontWeight: 860,
                fontFamily : 'Paytone One'
            }
        }

    }
))


const Article = () => {
    const classes = useStyles()
    return(
        <div className={classes.frame}>
            {
                Data.map(post => {
                    return(
                        <div key={post.id}>
                        <Card className={classes.component}>
                             <CardContent className={classes.container}>
                                <Grid container>
                                    <Grid item lg={5} md={5} sm={5} xs={12}>
                                        <img src={post.url} alt="image" className={classes.image}/>
                                    </Grid>
                                    <Grid item lg={7} md={7} sm={5} xs={12} className={classes.rightcontainer}>
                                        <Typography className={classes.title}>{post.title}</Typography>
                                        <Typography className={classes.author}>
                                            <b>Made</b> by {post.author}
                                        </Typography>
                                        <Typography className={classes.description}>{post.description}</Typography>
                                        <Typography className={classes.publisher}>
                                            Know more by <NavLink to={post.link} className="link">{post.publisher}</NavLink>
                                        </Typography>
                                    </Grid>
                                </Grid>
                             </CardContent>
                        </Card>
            </div>
                    )
                })
            }
        </div>
    )
}

export default Article;