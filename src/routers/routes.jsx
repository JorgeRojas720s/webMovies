import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LadingPage } from "../pages/LandingPage";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LadingPage />} />
      </Routes>
    </Router>
  );
}
