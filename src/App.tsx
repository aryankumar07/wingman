import './App.css'
import NavBar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';

function App() {
  return (
    <div className='bg-background'>
      <NavBar/>
      <hr />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App
