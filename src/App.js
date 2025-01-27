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
import TablesGeneralPage from "./pages/TablesGeneralPage";
import TablesDataPage from "./pages/TablesDataPage";
import ChartsChartPage from "./pages/ChartsChartPage";
import ChartsApexPage from "./pages/ChartsApexPage";
import IconsBootstrapPage from "./pages/IconsBootstrapPage";
import IconsRemixPage from "./pages/IconsRemixPage";
import IconsBoxiconsPage from "./pages/IconsBoxiconsPage";
import UsersProfilePage from "./pages/UsersProfilePage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import BlankPage from "./pages/BlankPage";

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
        {/* Tables */}
        <Route exact path='/tables-general' element={<TablesGeneralPage />} />
        <Route exact path='/tables-data' element={<TablesDataPage />} />

        {/* charts */}
        <Route exact path='/charts-chartjs' element={<ChartsChartPage />} />
        <Route exact path='/charts-apexcharts' element={<ChartsApexPage />} />

        {/* Icons */}
        <Route exact path='/icons-bootstrap' element={<IconsBootstrapPage />} />
        <Route exact path='/icons-remix' element={<IconsRemixPage />} />
        <Route exact path='/icons-boxicons' element={<IconsBoxiconsPage />} />

        {/* Users-profile */}
        <Route exact path='/users-profile' element={<UsersProfilePage />} />

        {/* Frequently Asked Questions */}
        <Route exact path='/pages-faq' element={<FAQPage />} />

        {/* Contact */}
        <Route exact path='/pages-contact' element={<ContactPage />} />

        {/* Auth */}
        <Route exact path='/pages-register' element={<RegisterPage />} />
        <Route exact path='/pages-login' element={<LoginPage />} />

        {/* Blank */}
        <Route exact path='/pages-blank' element={<BlankPage />} />

        {/* Error */}
        <Route exact path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
