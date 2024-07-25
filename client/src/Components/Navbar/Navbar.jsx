import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import "../fonts.css";

function Header() {
    const [open, setOpen] = useState("-200px");

    const handleOpenMenu = () => setOpen("0px");

    const handleExitMenu = () => setOpen("-200px");

    const [navBg, setNavBg] = useState({ background: "#15171e" });

    useEffect(() => {
        const handleScroll = () => {
            let value = window.scrollY;
            if (value > 20) {
                setNavBg({ background: "#1f222e" });
            } else {
                setNavBg({ background: "#15171e" });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const iconSize = 32;

    return (
        <nav style={navBg}>
            <div>
                <h1>techbyalec.dev</h1>
            </div>
            <ul style={{ right: open }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="/#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <IconX
                    className={styles.icons}
                    onClick={handleExitMenu}
                    size={iconSize}
                />
            </ul>
            <IconMenu2
                className={styles.icons}
                onClick={handleOpenMenu}
                size={iconSize}
            />
        </nav>
    );
}
export default Header;
