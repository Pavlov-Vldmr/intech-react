import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.css";
import { NavData } from "./NavData";

// import styles from './App.module.css';


// function Header() {
class Header extends Component{
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked:
        !this.state.clicked})
    }
    render(){

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
                    {/* <div className={styles.burger} onClick={this.handleClick}> */}
                        {/* <div className={this.state.clicked ? styles.show : styles.hides}></div>     */}
                    {/* </div> */}
                    {/* <li><NavLink to="/">Home</NavLink></li> */}
                    {/* </nav> */}

                </div>
            </div>
        </header >

    );
}}

export default Header;
