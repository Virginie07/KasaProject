import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Fiches from "./pages/Fiches";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Fiches/:id" element={<Fiches />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;



// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Fiches" element={<Fiches way = {iKasaAnnonces.id}/>} />
//         <Route path="*" element={<Nopage />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// };

// export default App;
