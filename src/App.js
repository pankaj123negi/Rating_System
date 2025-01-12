import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import BussinessResults from "./pages/BussinessResults";
import SoftSkills from "./pages/SoftSkills";
import TeamTarget from "./pages/TeamTarget";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bussiness" element={<BussinessResults />} />
        <Route path="/soft_skills" element={<SoftSkills />} />
        <Route path="/team_target" element={<TeamTarget />} />
      </Routes>
    </Router>
  );
}

export default App;
