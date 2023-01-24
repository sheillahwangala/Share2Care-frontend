import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage/HomePage';
import FarmProduce from './components/produce/FarmProduce';
import Template from './components/template/Template';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/farmproduce" index element={<FarmProduce />} />
        </Routes>
      </Template>
    </BrowserRouter>
  </div>
  );
}

export default App;
