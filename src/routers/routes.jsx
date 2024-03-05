import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LadingPage } from "../pages/LandingPage";

import { MovieDetalles } from "../pages/MovieDetalles";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LadingPage />} />
        <Route exact path="/movies/:movieId" 
        element={<MovieDetalles/>} />
      </Routes>
    </Router>
  );
}
