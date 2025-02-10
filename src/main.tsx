import "@/styles/globals.css";
import "@/styles/tailwind.css";
import 'aos/dist/aos.css'; // Don't forget to import the CSS file
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
