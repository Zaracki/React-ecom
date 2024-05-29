import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import './index.css'; 
import Layout from './components/Navigation/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
