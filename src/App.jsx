import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Case from "./pages/Case";
import CrimeScene from "./pages/CrimeScene";
import Evidence from "./pages/Evidence";
import Suspects from "./pages/Suspects";
import Investigation from "./pages/Investigation";
import Ending from "./pages/Ending";

import GhostEvent from "./components/GhostEvent";
import AudioManager from "./components/AudioManager";

function App() {
  return (
   <BrowserRouter basename="/haunted-murder-mystery">

      {/* Horror Sound Button */}
      <AudioManager />

      {/* Ghost Event */}
      <GhostEvent />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/case"
          element={<Case />}
        />

        <Route
          path="/crime-scene"
          element={<CrimeScene />}
        />

        <Route
          path="/evidence"
          element={<Evidence />}
        />

        <Route
          path="/suspects"
          element={<Suspects />}
        />

        <Route
          path="/investigation"
          element={<Investigation />}
        />

        <Route
          path="/ending"
          element={<Ending />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;