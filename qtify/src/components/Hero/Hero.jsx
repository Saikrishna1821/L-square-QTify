import React from "react";
import styles from "./Hero.module.css";
import { ReactComponent as HeadphoneIcon } from "../../assets/vibrating-headphone 1.svg";
const Hero=()=>
{
    return <>
    <div className={styles.wrapper}>
        <div className={styles.text}>
            <div>100 Thousand Songs, ad-free</div>
            <div>Over thousands podcast episodes</div>
        </div>
        <div><HeadphoneIcon/></div>

    </div>
    </>
}

export default Hero;