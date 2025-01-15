import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlertsPage from "./pages/AlertsPage";
import AccordionPage from "./pages/AccordionPage";
import BadgesPage from "./pages/BadgesPage";
import BreadcrumbsPage from "./pages/BreadcrumbsPage";
import ButtonsPage from "./pages/ButtonsPage";
import CardsPage from "./pages/CardsPage";
import CarouselPage from "./pages/CarouselPage";
import ListGroupPage from "./pages/ListGroupPage";
import ModalPage from "./pages/ModalPage";
import TabsPage from "./pages/TabsPage";
import PaginationPage from "./pages/PaginationPage";
import ProgressPage from "./pages/ProgressPage";
import SpinnersPage from "./pages/SpinnersPage";
import TooltipsPage from "./pages/TooltipsPage";
import FormsPage from "./pages/FormsPage";
import FormsLayoutsPage from "./pages/FormsLayoutsPage";
import FormsEditorsPage from "./pages/FormsEditorsPage";
import FormsValidationPage from "./pages/FormsValidationPage";

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
        <Route
          exact
          path='/components-list-group'
          element={<ListGroupPage />}
        />
        <Route exact path='/components-modal' element={<ModalPage />} />
        <Route exact path='/components-tabs' element={<TabsPage />} />
        <Route
          exact
          path='/components-pagination'
          element={<PaginationPage />}
        />
        <Route exact path='/components-progress' element={<ProgressPage />} />
        <Route exact path='/components-spinners' element={<SpinnersPage />} />
        <Route exact path='/components-tooltips' element={<TooltipsPage />} />

        {/* Forms */}
        <Route exact path='/forms-elements' element={<FormsPage />} />
        <Route exact path='/forms-layouts' element={<FormsLayoutsPage />} />
        <Route exact path='/forms-editors' element={<FormsEditorsPage />} />
        <Route
          exact
          path='/forms-validation'
          element={<FormsValidationPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
