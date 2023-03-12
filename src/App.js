import Header from "./components/Header/Header";
import "./App.scss";
import Footer from './components/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import Register from "./pages/Auth/Register/Register.jsx";
import Main from "./pages/Main/Main";
import Login from "./pages/Auth/Login/Login.jsx";
import Items from './pages/Items/Items';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/items" element={<Items />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> 
        <Footer/>
    </div>
  );
}

export default App;
