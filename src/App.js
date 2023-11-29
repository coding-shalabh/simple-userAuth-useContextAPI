import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Login from './Components/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from './Context/context';

const theme = createTheme({
  palette: {
    
      white: '#fff',
      black: '#000',
      orange: 'orange',
      blue: 'blue',
  },
});


function App() {
  return (
    <AppProvider>
      <div className="App" style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background:'orange'}}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
    </div>
    </AppProvider>
    
  );
}

export default App;
