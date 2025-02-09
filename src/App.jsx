import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProductPage from "./pages/Products";
import NoPageFound from "./pages/404Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="*" element={< NoPageFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
