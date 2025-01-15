import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlertsPage from "./pages/AlertsPage";
import AccordionPage from "./pages/AccordionPage";
import BadgesPage from "./pages/BadgesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />

        {/* Components */}
        <Route exact path='/components-alerts' element={<AlertsPage />} />
        <Route exact path='/components-accordion' element={<AccordionPage />} />
        <Route exact path='/components-badges' element={<BadgesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
