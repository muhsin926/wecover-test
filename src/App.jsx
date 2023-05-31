import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetCarDetailsPage from "./pages/GetCarDetailsPage";
import ChassisNumberPage from "./pages/ChassisNumberPage";

const App = () => {
  return (
    <main className="backgroundColor">
      <Router>
        <Routes>
          <Route path="/" element={<GetCarDetailsPage />} />
          <Route path="/chassis-number" element={<ChassisNumberPage />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
