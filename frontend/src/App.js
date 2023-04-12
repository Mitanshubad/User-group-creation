//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './component/SignupPage'
import Login from './component/LoginPage';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
      
      
        <Route exact path="" element={<Login/> }/>
        
        
        <Route path="/register" element={<Signup/>} />
        
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


