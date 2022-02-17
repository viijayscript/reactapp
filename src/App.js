import {Box, makeStyles} from '@material-ui/core';
import Article from './components/Article';
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Refractive from './components/Refractive';
import IdealBodyWeight from './components/IdealBodyWeight';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
        <Router>
        <Routes>
        <Route exact path="/" element={<Article/>}/>
        <Route exact path="/refractive" element={<Refractive/>}/>
        <Route exact path="/idealbodyweight" element={<IdealBodyWeight/>}/>
        <Route path="*" element={<Article/>}/>
        </Routes>
      </Router>
      </>   
  );
}

export default App;
