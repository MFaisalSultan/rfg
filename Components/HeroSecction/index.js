import React from 'react'
import CarouselSlider from '../Carousel';
import NavBar from '../Menu';
import styles from './styles.module.scss';

export default function HeroSection() {
    return (
        <div className={styles.heroSection}>
            <div className={styles.navbarBox}>
            <NavBar/>
            </div>
            <CarouselSlider/>
        </div>
    )
}
