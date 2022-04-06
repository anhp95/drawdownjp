import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import DrawDown from "./pages/DrawDown";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import EmissionOverview from "./components/EmissionOverview";

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

    // <div className="grid grid-cols-5 min-h-screen">
    //   <Router>
    //     {/* SideBar */}
    //     <aside className="row-span-6 col-start-1 col-end-2 bg-blue-400">
    //       <SideBar />
    //     </aside>
    //     {/* Header */}
    //     <nav className="col-start-2 col-end-6 bg-slate-400">
    //       <Header />
    //     </nav>
    //     {/* PageContent */}
    //     <main className="row-span-4 col-start-2 col-end-6">
    //       <Routes>
    //         <div className="flex flex-row flex-wrap justify-center">
    //           <Route path="/home" element={<Home />} />
    //           <Route path="/emission/overview" element={<EmissionOverview />} />
    //           <Route path="/drawdown" element={<DrawDown />} />
    //         </div>
    //       </Routes>
    //     </main>
    //     {/* Footer */}
    //     <footer className="col-start-2 col-end-6 bg-yellow-400">
    //       <Footer />
    //     </footer>
    //   </Router>
    // </div>

    // <div className="grid grid-cols-5 min-h-screen">
    //   <Router>
    //     <SideBar />
    //     <Header />

    //     <div className="flex flex-col w-screen">
    //       {/* Header */}

    //       {/* End Header*/}
    //       {/* PageContent */}
    //       <div className="flex flex-row flex-wrap bg-slate-100">
    //         <Routes>
    //           <Route path="/home" element={<Home />} />
    //           <Route path="/emission/overview" element={<EmissionOverview />} />
    //           <Route path="/drawdown" element={<DrawDown />} />
    //         </Routes>
    //       </div>
    //       {/* End PageContent */}
    //       {/* Footer */}
    //       <Footer />
    //       {/* End Footer */}
    //     </div>
    //   </Router>
    // </div>
  );
}

export default App;
