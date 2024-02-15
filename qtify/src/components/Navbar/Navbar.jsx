import React from "react";
import SearchBar from "../searchBar/searchBar";
import logo from "../../assets/Group 1.png";
import Feedback from "../Feedback/Feedback";
import styles from "./navbar.module.css";
const Navbar=()=>
{

    return <>
    <nav className={styles.nav}>
    <img src={logo} alt ="logo"/>
    <SearchBar placeholder={"Search a album of your choice"}/>
    <Feedback/>
    </nav>
    </>
}

export default Navbar;