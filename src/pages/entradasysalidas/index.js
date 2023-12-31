import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Article.module.css'
import Link from 'next/link';
import CodeViewerEnySal from '@/components/enysalcode.js';

const inter = Inter({ subsets: ['latin'] })


export default function Esqueleto() {
  return (
    <>
      <Head>
        <title>CodeXLearn | Entradas y Salidas</title>
        <meta name="description" content="CodeXLearn Entradas y Salidas Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.article}>
          <h1>Entradas y Salidas</h1>
          <h2>Entradas</h2>
          <p>
            Para manejar las entradas por consola en C++, que son las entradas más usadas
            en programación competitiva, usamos la sentencia <strong>cin</strong>, la cual significa Console
            Input, dicha sentencia almacena dentro de una variable lo que se ingrese en consola.
          </p>
          <h2>Salidas</h2>
          <p>
            Por otro lado, manejamos las salidas de igual forma por consola con la sentencia <strong>cout</strong>
            , en donde, podemos imprimir variables, texto o la combinación de ambas.
          </p>
          <h2>Ejemplo</h2>
        </div>
        <div className={styles.codeviewer}>
          <CodeViewerEnySal/>
        </div>
        <div className={styles.article}>
          <p>
            El código anterior es bastante simple, ya que lee por consola el valor de x, e imprime este mismo valor.
          </p>
          <p>
            Pero tambien podrias leer en la misma sentencia varios valores concatenando &gt;&gt;
          </p>
          <p>
            Lo mismo con la escritura, podemos escribir varios valores con la misma sentencia concatenando &lt;&lt;
          </p>
          <p>
            Tambien podemos escribir un salto de linea "\n" o con la sentencia endln()
          </p>
          <h2>Problemas</h2>
          <div className={styles.grid}>
            <a
              href="/entradasysalidas/problemas"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
            <h2>
              Problemas <span>-&gt;</span>
            </h2>
            </a> 
          </div>
        </div>
      </main>
    </>
  )
}
