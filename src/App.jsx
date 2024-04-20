import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Roles from "./pages/Roles.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/roles" element={<Roles />} />
      </Routes>
    </Router>
  );
}

export default App;
