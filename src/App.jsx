import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Nabvar";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import NavbarMarquee from "./components/NavbarMarquee";
import { Modal } from "antd";
import FooterComponent from "./components/FooterComponent";
import { IoCloseCircle } from "react-icons/io5";
import AboutEkikrit from "./pages/AboutUs/AboutEkikrit";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
    return (
        <div className="app">
            <GlobalStyle />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/about-ekikrit" element={<AboutEkikrit />} />
                <Route path="/news" element={<News />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>

            {/* <Modal
                open
                footer={null}
                width={1000}
                closeIcon={<IoCloseCircle color="red" size={40} />}
            >
                <div style={{ height: "900px" }}>
                    <img src={image} height="100%" width="100%" alt="image" />
                </div>
            </Modal> */}
        </div>
    );
}

export default App;
