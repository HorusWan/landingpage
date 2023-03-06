import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [buttonClicked, setButtonClicked] = useState(false)

  const handleClick = () => {
    setButtonClicked(true);
    window.location.href = 'https://www.horuswan.ca';
  }
  

  return (
    <>
      <Head>
        <title>Horus Wan | UX UI Designer</title>
        <meta name="description" content="Portfolio of Horus Wan, UX UI Designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap" rel="stylesheet"></link>
      </Head>
      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}><a href="#">Home</a></li>
          <li className={styles.navbar__item}><a href="#">Projects</a></li>
          <li className={styles.navbar__item}><a href="#">About Me</a></li>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Horus Wan</h1>
          <h2>UX&UI Designer</h2>
        </div>
        <div className={styles.buttonContainer}>
          <button
            style={{ backgroundColor: '#0693E3', color: '#FFFFFF' }}
            onClick={handleClick}
          >View More</button>
        </div>
      </main>
    </>
  )
}
