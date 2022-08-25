// import { Button } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Card from './components/Card'
import { createTheme } from '@mui/material/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';

const theme = createTheme({
  direction: 'rtl',
});



// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

function RTL(props) {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}




function App() {
  return (
    <RTL>
      <div className="App">
        <Header />
        <Card />
      </div>
    </RTL>
  );
}

export default App;
