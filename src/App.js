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
import NotFound from './components/NotFound/NotFound';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditUser from "./pages/EditUser/EditUser";


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
            <Route path="/edituser" element={<EditUser />} />
            <Route path="*" element={<NotFound to="/404"/>} />
          </Routes> 
          <ToastContainer />
        <Footer/>
    </div>
  );
}

export default App;
