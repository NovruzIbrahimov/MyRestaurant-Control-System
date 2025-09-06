import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Tables from "./pages/Tables/Tables";
import Menu from "./pages/Menu/Menu";
import Orders from "./pages/Orders/Orders";
import Reports from "./pages/Reports/Reports";
import Users from "./pages/Users/Users";
import "./App.css";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container container-fluid">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="main-content col-lg-10 col-12 d-flex flex-column p-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <div className="page-content flex-grow-1 p-3 bg-light overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default App;
