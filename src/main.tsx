import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diagram from "./pages/Diagram.tsx";
import Charts from "./pages/Charts.tsx";
import { MainProvider } from "./lib/contexts/index.tsx";
import { TeamFormDialog } from "./components/custom/TeamForm/TeamFormDialog.tsx";
import { MemberFormDialog } from "./components/custom/MemberForm/MemberFormDialog.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainProvider>
      <TeamFormDialog />
      <MemberFormDialog />
      <BrowserRouter>
        <Routes>
          <Route path="/diagram" element={<Diagram />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  </StrictMode>
);
