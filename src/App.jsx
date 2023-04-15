import { Outlet } from "react-router-dom";
import Header from "./layouts/header/Header";
import Intro from "./components/hero/Hero";

function App() {
    return (
        <div className="App">
            <Header />
            <Intro />
            <Outlet />
        </div>
    );
}

export default App;
