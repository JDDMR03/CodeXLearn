import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Article.module.css'
import Link from 'next/link';
import TablaTiposDatos from '../components/tiposDato.js';

const inter = Inter({ subsets: ['latin'] })


export default function Variables() {
  return (
    <>
      <Head>
        <title>CodeXLearn | Variables</title>
        <meta name="description" content="Variables page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.article}>
          <h1>Variables</h1>
          <h2>¿Qué son?</h2>
          <p>
            Las variables en programación son espacios en memoria que pueden tomar
            cualquier valor siempre del mismo tipo, mientras que en programación
            competitiva las vemos como cajas, en las cuales podemos guardar
            información siempre del mismo tipo.
          </p>
          <h2>Tabla</h2>
          <TablaTiposDatos/>
          <h2>Notas</h2>
          <p>
            A cada variable numérica se le puede poner el prefijo <strong>long</strong>, el cual
            aumenta exponencialmente el límite de estos tipos de datos.
          </p>
          <p>
            Además del <strong>unsigned</strong>, el cual le quita la posibilidad de número negativos al número,
            pero agrega un bit más al alcance.
          </p>
        </div>
      </main>
    </>
  )
}
