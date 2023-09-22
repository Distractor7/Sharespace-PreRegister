import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Grid from "./components/grid";
import Header from "./components/header";
import HowItWorks from "./components/contact"; // Assuming this is correct import

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/another" element={<HowItWorks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
