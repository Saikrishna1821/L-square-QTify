import React from "react";
import SearchBar from "../searchBar/searchBar";
import logo from "../../assets/Group 1.png";
import Feedback from "../Feedback/Feedback";
import styles from "./navbar.module.css";
const Navbar=()=>
{

    return <>
    <nav className={styles.nav}>
   <div  className={styles.logodiv}><img src={logo} alt ="logo" width={67}/></div>
    <SearchBar placeholder={"Search a album of your choice"}/>
    <Feedback/>
    </nav>
    </>
}

export default Navbar;