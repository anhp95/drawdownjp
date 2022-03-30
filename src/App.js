import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/index.css";

import SideBar from "./components/SideBar";
import DrawDown from "./pages/DrawDown";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import EmissionOverview from "./components/EmissionOverview";

function App() {
  return (
    <div className="flex flex-row">
      <Router>
        {/* SideBar */}
        <div className="flex h-screen">
          <SideBar />
        </div>
        {/* End SideBar */}
        <div className="flex flex-col w-screen">
          {/* Header */}
          <Header />
          {/* End Header*/}
          {/* PageContent */}
          <div className="flex flex-row flex-wrap bg-slate-100">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/emission/overview" element={<EmissionOverview />} />
              <Route path="/drawdown" element={<DrawDown />} />
            </Routes>
          </div>
          {/* End PageContent */}
          {/* Footer */}
          <Footer />
          {/* End Footer */}
        </div>
      </Router>
    </div>
  );
}

export default App;
