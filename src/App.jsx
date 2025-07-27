import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Pages1 from "./pages/Pages";
import Pages2 from "./pages/Pages2";
import FinalPage from "./pages/FinalPage";
import BackgroundGradient from "./components/BackgroundGradient";

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<BackgroundGradient />}>
        <Route path="/" element={<Home />} />
        <Route path="/question-1" element={<Pages1 />} />
        <Route path="/question-2" element={<Pages2 />} />
        <Route path="/final" element={<FinalPage />} />
      </Route>
    </Routes>
  );
}

export default App;
