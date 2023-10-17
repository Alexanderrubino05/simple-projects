import { BrowserRouter, Route, Routes } from "react-router-dom";
import DnDScreen from "./pages/DetailScreens/DnDScreen";
import LandingScreen from "./pages/LandingScreen";
import ScrollToTop from "../utils/ScrollToTop";
import CoffeeAppScreen from "./pages/DetailScreens/CoffeeAppScreen";
import JobPortalScreen from "./pages/DetailScreens/JobPortalScreen";

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<LandingScreen />} />
        <Route path="/dnd-spells-website" element={<DnDScreen />} />
        <Route path="/coffee-app" element={<CoffeeAppScreen />} />
        <Route path="/job-portal" element={<JobPortalScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
