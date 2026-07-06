import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import GuestLinkGenerator from "./app/components/GuestLinkGenerator.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin-generator" element={<GuestLinkGenerator />} />
    </Routes>
  </BrowserRouter>
);
