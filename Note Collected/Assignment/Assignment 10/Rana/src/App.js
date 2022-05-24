import { Button, Col, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Services/Services";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Checkout from "./Pages/Checkout/Checkout";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/checkout" element={<RequireAuth><Checkout/></RequireAuth>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
