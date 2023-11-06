import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Article.module.css'
import Link from 'next/link';
import CodeViewerTemplate from '../components/templateCode.js';

const inter = Inter({ subsets: ['latin'] })


export default function Esqueleto() {
  return (
    <>
      <Head>
        <title>CodeXLearn | Esqueleto</title>
        <meta name="description" content="Template code page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.article}>
          <h1>Esqueleto</h1>
          <h2>Template</h2>
          <p>
            Un código en C++ es bastante corto, aquí se muestra como se implementa un hola mundo clásico.
          </p> 
        </div>
        <div className={styles.codeviewer}>
          <CodeViewerTemplate/>
        </div>
      </main>
    </>
  )
}
