import React from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.css";
import { NavData } from "./NavData";

// import styles from './App.module.css';


function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerInner}>
                    <Link to="/" className={styles.headerLogo}>
                        <div>
                            <img src="./images/logo.png" alt="Лого" />
                        </div>
                    </Link>
                    
                    {/* <nav> */}
                    <ul>
                        {NavData.map((items) =>
                        (
                            <li key={items.id}><NavLink to={items.url}>{items.title}</NavLink></li>
                        )
                        )}
                    </ul>
                    {/* <li><NavLink to="/">Home</NavLink></li> */}
                    {/* </nav> */}

                </div>
            </div>
        </header >

    );
}

export default Header;
