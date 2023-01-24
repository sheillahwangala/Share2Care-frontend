import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FarmersPage from './components/farmer/FarmersPage';
import HomePage from './components/homepage/HomePage';
import FarmProducts from './components/products/FarmProducts';
import Template from './components/template/Template';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/farmproducts" index element={<FarmProducts />} />
          <Route path="/farmers-page" index element={<FarmersPage />} />
        </Routes>
      </Template>
    </BrowserRouter>
  </div>
  );
}

export default App;
