import React from 'react'
import { useState,useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import {ReactComponent as LeftArrow} from '../../../assets/leftArrow (1).svg'
import styles from './Carouselleft.module.css'

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning)

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsBeginning(swiper.isBeginning)
        })
    },[swiper])
  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
        <p className={styles.empty}></p>
    </div>
  )
}

export default CarouselLeftNavigation