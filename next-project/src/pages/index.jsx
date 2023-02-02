import Head from 'next/head';
import { Inter } from '@next/font/google';
import Gallery from "@/components/gallery";
import Confetti from 'react-confetti';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [confetti, setConfetti] = useState(88);

  return (
    <>
      <Head>
        <title>Next Project</title>
        <meta name="description" content="First Next project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Gallery />
        <div className={styles.confetti}>
          <Confetti
            height={1000}
            width={2500}
            numberOfPieces={confetti}
          />
        </div>
        <label htmlFor="confetti">Regulate Intensity of Confetti</label>
        <input
          className={styles.input}
          type="range"
          name="confetti"
          id="confetti"
          onInput={(e) => setConfetti(e.target.value) * 2.5}
        />
      </main>
    </>
  );
};
