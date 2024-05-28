import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import './index.css'; 

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />}/>
    </Routes>
  )
}

export default App
