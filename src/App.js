import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
    <Navbar></Navbar>
   <Routes>

    <Route path='/' element={<Home></Home>}></Route>
   </Routes>
    </>
   
  );
}

export default App;
