import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeXLearn</title>
        <meta name="description" content="CodeXLearn menu page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

        <div className={styles.center}>
            <h1>CodeXLearn</h1>
            <p>Entrena para concursos de Programación Competitiva</p>
        </div>

        <div className={styles.grid}>
          <a
            href="/variables"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Variables <span>-&gt;</span>
            </h2>
          </a>

          <a
            href="/esqueleto"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Esqueleto <span>-&gt;</span>
            </h2>
          </a>

          <a
            href="/entradasysalidas"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Entradas y Salidas <span>-&gt;</span>
            </h2>
          </a>

          <a
            href="/operadores"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Operadores <span>-&gt;</span>
            </h2>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Condicionales <span>-&gt;</span>
            </h2>
          </a>
          
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Ciclos <span>-&gt;</span>
            </h2>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Arreglos <span>-&gt;</span>
            </h2> 
          </a> 

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Matrices <span>-&gt;</span>
            </h2> 
          </a>
          
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Recursividad <span>-&gt;</span>
            </h2> 
          </a>

        </div>
      </main>
    </>
  )
}
