import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Template from './components/template/Template';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path="/"  />
        </Routes>
      </Template>
    </BrowserRouter>
  </div>
  );
}

export default App;
