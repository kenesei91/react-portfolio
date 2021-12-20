import React from "react";
//import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


function App() {
  return (
    <div>
      {/* <Header /> */}
      <About />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
