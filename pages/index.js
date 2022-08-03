import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from '../Components/MenuBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <AppBar/>
  
    </div>
  )
}
