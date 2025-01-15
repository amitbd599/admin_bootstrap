import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlertsPage from "./pages/AlertsPage";
import AccordionPage from "./pages/AccordionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />

        {/* Components */}
        <Route exact path='/components-alerts' element={<AlertsPage />} />
        <Route exact path='/components-accordion' element={<AccordionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
