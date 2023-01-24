import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddDonation from './components/donations/AddDonation';
import Donations from './components/donations/Donations';
import AddProduct from './components/farmer/AddProduct';
import FarmersPage from './components/farmer/FarmersPage';
import HomePage from './components/homepage/HomePage';
import Login from './components/login/Login';
import FarmProducts from './components/products/FarmProducts';
import SignUp from './components/Sign_up/SignUp';
import Template from './components/template/Template';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Template>
          <Routes>
            <Route path="/signup" index element={<Login />} />
            <Route path="/login" index element={<Login />} />
            <Route path="/" index element={<HomePage />} />
            <Route path="/farmproducts" index element={<FarmProducts />} />
            <Route path="/farmers-page" index element={<FarmersPage />} />
            <Route path="/sellproduct" index element={<AddProduct />} />
            <Route path="/add-donation" index element={<AddDonation />} />
            <Route path="/donations" index element={<Donations />} />
          </Routes>
        </Template>
      </BrowserRouter>
    </div>
  );
}

export default App;
