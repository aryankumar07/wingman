import axios from 'axios';
import './App.css'
import NavBar from './components/navbar/navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';

function App() {


  const fetchreq = async ()=>{
    try{
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res)
    }catch(e){
      console.log(e)
    }
  }


  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App
