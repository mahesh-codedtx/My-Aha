import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header/header.tsx";
import Footer from "./layouts/Footer/footer.tsx";
import ChatExpert from "./components/ChatExpert/index.tsx";
import ScrollToTop from "./components/ScrollToTop/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Header />
      <App />
      <Footer />
      <ChatExpert />
    </BrowserRouter>
  </StrictMode>
);
