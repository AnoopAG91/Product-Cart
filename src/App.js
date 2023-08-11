import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './components/Pages/Products';
import Cart from './components/Pages/Cart';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
