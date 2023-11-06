import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Article.module.css'
import Link from 'next/link';
import CodeViewerOperadores from '@/components/operadoresCode.js';
import TablaOperadoresLogicos from '@/components/opLogicos.js';
import TablaOperadoresAritmeticos from '@/components/opAritmeticos.js';
import TablaOperadoresRelacionales from '@/components/opRelacionales.js';

const inter = Inter({ subsets: ['latin'] })


export default function Esqueleto() {
  return (
    <>
      <Head>
        <title>CodeXLearn | Entradas y Salidas</title>
        <meta name="description" content="CodeXLearn Operadores page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.article}>
          <h1>Operadores</h1>
          <h2>Aritmeticos</h2>
          <p>
            Estos operadores nos permiten realizar cálculos aritméticos, lo que
            nos da la posibilidad de modificar nuestras variables, los más usados
            para programación competitiva en C++ son:
          </p>
          <TablaOperadoresAritmeticos/>
          <p>
            El operador módulo, simplemente retorna el residuo de hacer la división entera de x entre y.
          </p>
          <h2>Logicos</h2>
          <p>
            También tenemos a los operadores lógicos, los cuales nos permiten entre comillas hacerle preguntas
            al código, estos solo trabajan con valores de 0, 1.
          </p>
          <TablaOperadoresLogicos/>
          <p>
            En C++ estos operadores se ponen dos veces debido a sintaxis.
          </p>
          <h2>Relacionales</h2>
          <p>
            Por último, los operadores relacionales, nos permiten comparar dos valores, estos operadores al
            igual que los lógicos retornan solo 0s o 1s.
          </p>
          <TablaOperadoresRelacionales/>
          <h2>Ejemplo</h2>
        </div>
        <div className={styles.codeviewer}>
          <CodeViewerOperadores/>
        </div>
        <div className={styles.article}>
          <p>
            En el ejemplo anterior podemos ver un código el cual usa todos los operadores antes vistos,
            no es necesario entender la parte de la condición aún, es para ejemplificar su uso real en código.
          </p>
          <h2>Problemas</h2>
          <div className={styles.grid}>
            <a
              href="/operadores/problemas"
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
