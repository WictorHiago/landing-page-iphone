import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./pages/hero/Hero";
import Footer from "./components/footer/Footer";
export function App() {
  return (
    <>
      <main className="flex flex-col max-w-[1200px] mx-auto">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </main>
    </>
  );
}
