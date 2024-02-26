import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import { Modal } from "antd";
import { IoCloseCircle } from "react-icons/io5";
import AboutEkikrit from "./pages/AboutUs/AboutEkikrit";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import GalleryDetail from "./pages/GalleryDetail";
import PrivateRoute from "./components/PrivateRoute";
import LoanService from "./pages/Services/LoanService";
import DepositService from "./pages/Services/DepositService";
import OurTeams from "./pages/AboutUs/OurTeams";
import { baseApiUrl } from "./config";

function App() {
    const [noticeObj, setNoticeObj] = useState({
        notice: false,
        noticeUrl: "",
    });
    useEffect(() => {
        fetch(`${baseApiUrl}/notice`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((newUserData) => {
                // Process the newly created user data
                setNoticeObj({
                    ...noticeObj,
                    notice: newUserData[0].notice,
                    noticeUrl: newUserData[0].noticeUrl,
                });
                console.log("New User Data:", newUserData);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);
    console.log(
        window.location.pathname,
        noticeObj?.notice &&
            window.location.pathname !== "/login" &&
            window.location.pathname !== "/dashboard",
        "window location"
    );

    return (
        <div className="app">
            <GlobalStyle />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/about-ekikrit" element={<AboutEkikrit />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/gallery/:galleryId" element={<GalleryDetail />} />
                <Route path="/loan-service" element={<LoanService />} />
                <Route path="/deposit-service" element={<DepositService />} />
                <Route path="/teams" element={<OurTeams />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={<PrivateRoute element={<Dashboard />} />}
                />
            </Routes>

            <Modal
                open={
                    noticeObj?.notice &&
                    window.location.pathname !== "/login" &&
                    window.location.pathname !== "/dashboard"
                }
                footer={null}
                width={1000}
                closeIcon={<IoCloseCircle color="red" size={50} />}
                onCancel={() => setNoticeObj(false)}
            >
                <div style={{ height: "900px" }}>
                    <img
                        src={noticeObj?.noticeUrl}
                        height="100%"
                        width="100%"
                        alt="notice"
                    />
                </div>
            </Modal>
        </div>
    );
}

export default App;
