import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Cources from './pages/Cources/Cources';
import LoginSignup from './pages/Cources/LoginSignup/LoginSignup';
import Home from './pages/Home/Home';




function App() {
  return (
    <>

    <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/cources' element={<Cources></Cources>}></Route>
    <Route path='/login_signup' element={<LoginSignup></LoginSignup>}></Route>
   </Routes>

     

    </>

  );
}

export default App;
