import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./NavBar.module.css";
import HomePage from "../pages/Gallery";


function NavBar() {
    const [currentPage, setCurrentPage] = useState(HomePage)
    

    return (
        <nav className={styles.navBar}>
            <div className={styles.navElement}>
                <Link to="/" className={styles.link}>
                    Gallery
                </Link>
            </div>
            <div className={styles.navElement}>
                <Link to="Booking" className={styles.link}>
                    Booking
                </Link>
            </div>
            <div className={styles.navElement}>
                <Link to="Merch" className={styles.link}>
                    Merch
                </Link>
            </div>
            <div className={styles.navElement}>
                <Link to="/About" className={styles.link}>
                    About
                </Link>
            </div>
            <div className={styles.navElement}>
                <Link to="FAQ" className={styles.link}>
                    FAQ
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
