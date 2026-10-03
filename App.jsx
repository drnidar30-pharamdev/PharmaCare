import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Medications from "./pages/Medications";
import Counselling from "./pages/Counselling";
import About from "./pages/About";
import MedicationReview from "./pages/MedicationReview";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/counselling" element={<Counselling />} />
        <Route path="/about" element={<About />} />
        <Route path="/medication-review" element={<MedicationReview />}
/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;