import { Outlet } from "react-router-dom";

// COMPONENTS
import Header from "./layouts/header/Header";
import Intro from "./components/hero/Hero";
import Footer from "./layouts/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Intro />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
