import {Box, makeStyles} from '@material-ui/core';
import Article from './components/Article';
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Refractive from './components/Refractive';
import IdealBodyWeight from './components/IdealBodyWeight';
import Roman from './components/Roman';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataStructure from './components/DataStructure';
import SeleniumList from './components/Selenium';
import GithubIndia1 from './components/GithubIndia1';
import GithubIndia2 from './components/GithubIndia2';

const useStyles = makeStyles(
  {
    container:{
      marginTop: 110,
      width: '59%',
      margin: '0 auto'
    }
  }
)

function App() {
  const classes = useStyles();
  return (
    <>
    <Box>
        <Header/>
        <Box className={classes.container}>
        <InfoHeader/>
        </Box>
    </Box>
        <Router basename="/">
        <Routes>
        <Route exact path="/reactapp" element={<Article/>}/>
        <Route exact path="/reactapp/refractive" element={<Refractive/>}/>
        <Route exact path="/reactapp/idealbodyweight" element={<IdealBodyWeight/>}/>
        <Route exact path="/reactapp/roman" element={<Roman/>}/>
        <Route exact path="/reactapp/datastructure" element={<DataStructure/>}/>
        <Route exact path="/reactapp/seleniumlist" element={<SeleniumList/>}/>
        <Route exact path="/reactapp/githubindia1" element={<GithubIndia1/>}/>
        <Route exact path="/reactapp/githubindia2" element={<GithubIndia2/>}/>
        <Route path="*" element={<Article/>}/>
        </Routes>
      </Router>
      </>   
  );
}

export default App;
