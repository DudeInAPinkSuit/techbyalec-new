import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
