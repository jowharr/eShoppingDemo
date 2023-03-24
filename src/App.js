import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage/ProductPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/productview' element={<ProductPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
