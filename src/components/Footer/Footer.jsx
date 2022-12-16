import React from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./Footer.module.css";
// import styles from './App.module.css';


function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={styles.footerInner}>
                    <span>Контакты</span>
                    <div>
                        <div className={styles.contactLeft}>
                            <p>ООО НПО "Интех"</p>
                            <p><span className="secondText">Почтовый адрес</span> 693020, г. Южно-Сахалинск, ул. Пушкина, д. 80, оф. 108</p>
                        </div>
                        <div className={styles.contactRight}>
                            <p>+7 4242 25-37-15</p>
                            <p>mail</p>
                        </div>
                    </div>
                    <span className={styles.copyR}>@intech</span>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
