import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { Contact } from './pages/Contact';
import { ProductPage } from './pages/ProductPage';
import './index.css'; 
import { Layout } from './components/navigation/Layout';
import { CheckoutSuccess } from './pages/CheckoutSuccess';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/Checkout" element={<Checkout />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/ProductPage/:id" element={<ProductPage />}/>
          <Route path="/CheckoutSuccess" element={<CheckoutSuccess />}/>
        </Route>
      </Routes>
    </>
  )
};

export default App
