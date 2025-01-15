import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlertsPage from "./pages/AlertsPage";
import AccordionPage from "./pages/AccordionPage";
import BadgesPage from "./pages/BadgesPage";
import BreadcrumbsPage from "./pages/BreadcrumbsPage";
import ButtonsPage from "./pages/ButtonsPage";
import CardsPage from "./pages/CardsPage";
import CarouselPage from "./pages/CarouselPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />

        {/* Components */}
        <Route exact path='/components-alerts' element={<AlertsPage />} />
        <Route exact path='/components-accordion' element={<AccordionPage />} />
        <Route exact path='/components-badges' element={<BadgesPage />} />
        <Route
          exact
          path='/components-breadcrumbs'
          element={<BreadcrumbsPage />}
        />
        <Route exact path='/components-buttons' element={<ButtonsPage />} />
        <Route exact path='/components-cards' element={<CardsPage />} />
        <Route exact path='/components-carousel' element={<CarouselPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
