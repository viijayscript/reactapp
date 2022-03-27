import ReactLoading from "react-loading";
import { useState } from "react";
import ResponsiveEmbed from "react-responsive-embed";
import { NavLink } from "react-router-dom";

function GithubIndia3() {

const [completed, setcompleted] = useState(undefined);


    setTimeout(() => {
        setcompleted(true);
      }, 10000);
    

    return(
            <div style={{padding: 20,width: "100%"}}>
                {!completed ? (
                    <div className="center">
                    <ReactLoading type="spin" color="green" height={230} width={230}/>
                    </div>
                ):(
                    <div className="border">
                    <NavLink to="/reactapp" className="home">Back to Home</NavLink>
                    <br/>
                    <ResponsiveEmbed src='https://www.viijayscript.com/2022/03/list-of-github-open-source-projects-built-in-or-receiving-significant-contributions-from-india-part-3.html?m=1' allowFullScreen ratio='9:16'/>
                    </div>
                )
                }
            
            </div>
    )
            }

export default GithubIndia3;