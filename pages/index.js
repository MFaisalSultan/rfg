import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from '../Components/MenuBar';
import HeroSection from '../Components/HeroSecction';
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <div className={styles.container}>
      <AppBar/>
      <HeroSection/>
    </div>
  )
}
