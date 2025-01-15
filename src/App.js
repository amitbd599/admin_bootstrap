import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComponentsAlertsPage from "./pages/ComponentsAlertsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />

        {/* Components */}
        <Route
          exact
          path='/components-alerts'
          element={<ComponentsAlertsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
