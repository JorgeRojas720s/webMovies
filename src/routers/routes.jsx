import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LadingPage } from "../pages/LandingPage";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LadingPage />} />
      </Routes>
    </Router>
  );
}
