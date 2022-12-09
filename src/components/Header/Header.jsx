import React from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.css";
// import styles from './App.module.css';


function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerInner}>
                    <Link to="/" className={styles.headerLogo}>
                        <div>
                            <img src="./images/logo.png" alt="Лого"/>
                        </div>
                    </Link>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/research-lab">Исследовательская лаборатория</NavLink></li>
                            <li><NavLink to="/research">Научные исследования</NavLink></li>
                            <li><NavLink to="/repair">Ремонтно-восстановительные работы</NavLink></li>
                            <li><NavLink to="/installation">Монтаж и шеф-монтаж оборудования </NavLink></li>
                            <li><NavLink to="/production">Производство </NavLink></li>
                        </ul>

                    </nav>
                </div>
            </div>
        </header >

    );
}

export default Header;
