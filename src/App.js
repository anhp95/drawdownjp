import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import EmissionOverview from "./pages/EmissionOverview";
import EmissionElectricity from "./pages/EmissionElectricity";
import EmissionCompany from "./pages/EmissionCompany";
import DrawDown from "./pages/DrawDown";
import Home from "./pages/Home";

import "./css/index.css";

function App() {
  return (
    <div className="flex">
      <Router>
        {/* SideBar */}
        <div className="flex min-h-screen">
          <SideBar />
        </div>
        {/* End SideBar */}
        <div className="flex sm:w-full min-h-screen">
          <div className="flex flex-col w-full">
            {/* Header */}
            <div className="flex h-15 w-full bg-white">
              <Header />
            </div>
            {/* End Header */}
            {/* Page Content */}
            <div className="flex min-h-[900px] bg-slate-200 w-full">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route
                  path="/emission/overview"
                  element={<EmissionOverview />}
                />
                <Route
                  path="/emission/electricity"
                  element={<EmissionElectricity />}
                />
                <Route path="/emission/company" element={<EmissionCompany />} />
                <Route path="/drawdown" element={<DrawDown />} />
              </Routes>
            </div>
            {/* End Page Content */}
            {/* Footer */}
            <div className="flex bg-lime-300 mt-10">
              <Footer />
            </div>
            {/* End Footer */}
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
