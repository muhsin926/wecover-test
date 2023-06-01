import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GetCarDetailsPage } from "./pages/GetCarDetailsPage";
import { ChassisNumberPage } from "./pages/ChassisNumberPage";
import { SelectingInsCoPage } from "./pages/SelectingInsCoPage";
import { SelectedCompanyPage } from "./pages/SelectedCompanyPage";

const App = () => {
  return (
    <main className="backgroundColor">
      <Router>
        <Routes>
          <Route path="/" element={<GetCarDetailsPage />} />
          <Route path="/chassis-number" element={<ChassisNumberPage />} />
          <Route
            path="/selecting-insurence-companies"
            element={<SelectingInsCoPage />}
          />
          <Route path="/selected-company" element={<SelectedCompanyPage />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
