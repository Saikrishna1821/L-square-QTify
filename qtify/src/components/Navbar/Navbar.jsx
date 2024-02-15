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
    <SearchBar value={"Search your favorite albums"}/>
    <Feedback/>
    </nav>
    </>
}

export default Navbar;