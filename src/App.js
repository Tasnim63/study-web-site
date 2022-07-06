import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Authentication/Login';
import Cources from './pages/Cources/Cources';

import Home from './pages/Home/Home';




function App() {
  return (
    <>

    <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/cources' element={<Cources></Cources>}></Route>
  
    <Route path='/login' element={ <Login></Login>}></Route>
  
   </Routes>

     

    </>

  );
}

export default App;
