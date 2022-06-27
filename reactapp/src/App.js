import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/index'
import Contact from './Pages/contact'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/contact" element={<Contact/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
