import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetCarDetails from "./pages/GetCarDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetCarDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
