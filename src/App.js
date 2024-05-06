import React from "react";
import './app.scss'
import { BrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from './pages/Home'
import Bio from "./pages/Bio";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";



export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Home/>
      <Bio/>
      <Projects/>
      <Contact/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
