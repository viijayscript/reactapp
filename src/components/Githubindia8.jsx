import ReactLoading from "react-loading";
import { useState } from "react";
import ResponsiveEmbed from "react-responsive-embed";
import { NavLink } from "react-router-dom";
//import myImage from 'https://viijayscript.github.io/githubindia/Showcase%20through%20ViijayScript.jpg';

function GithubIndia8() {

const [completed, setcompleted] = useState(undefined);


    setTimeout(() => {
        setcompleted(true);
      }, 10000);
    

    return(
            <div style={{padding: 20,width: "100%"}}>
                {!completed ? (
                    <div>
                    <div className="center">
                    <ReactLoading type="spin" color="green" height={140} width={140}/>
                    </div>
                    <div className="showcase">
                        <img src={require('../components/Showcase_through_ViijayScript.jpg')} height="500" width="500"/>
                    </div>
                    </div>
                ):(
                    <div className="border">
                    <NavLink to="/reactapp" className="home">Back to Home</NavLink>
                    <br/>
                    <ResponsiveEmbed src='https://www.viijayscript.com/2022/06/list-of-github-open-source-projects-built-in-or-receiving-significant-contributions-from-india-part-8.html?m=1' allowFullScreen ratio='9:16'/>
                    </div>
                )
                }
            
            </div>
    )
            }

export default GithubIndia8;