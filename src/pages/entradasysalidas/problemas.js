import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Problems.module.css'
import Link from 'next/link';
import CodeViewerTemplate from '@/components/templateCode.js';

const inter = Inter({ subsets: ['latin'] })


export default function Esqueleto() {
  return (
    <>
      <Head>
        <title>Entradas y Salidas| Problemas</title>
        <meta name="description" content="Problem page for Entradas y Salidas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.article}>
          <h1>Problemas de Entradas y Salidas</h1>
          <p>
            A continuación verás un listado de problemas almacenados en la plataforma OmegaUp,
            donde previamente deberás crear una cuenta para subir los problemas, todos sobre
            entradas y salidas.
          </p>
        </div>
        <div className={styles.grid}>
          <a
              href="https://omegaup.com/arena/problem/helloWorld/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
            <h2>
              Hello World <span>-&gt;</span>
            </h2>
          </a>

          <a
              href="https://omegaup.com/arena/problem/David-y-el-Hola-Mundo-ITC/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
            <h2>
              David, Hola Mundo <span>-&gt;</span>
            </h2>
          </a>
        </div>
      </main>
    </>
  )
}
