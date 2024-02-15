import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/Search-icon.svg";
import styles from "./searchBar.module.css";
const SearchBar=({placeholder})=>
{

const handleSubmit=(e)=>
{
  e.preventDefault();
}
    return <>
     <form onSubmit={handleSubmit} className={styles.wrapper}>
        <input placeholder={placeholder} className={styles.search}/>
        <button type="submit" className={styles.button}>
          <SearchIcon/></button>
     </form>
    </>
}
export default SearchBar;