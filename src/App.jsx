import "./App.css";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/homePage";

function App() {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <HomePage />
        </>
    );
}

export default App;
