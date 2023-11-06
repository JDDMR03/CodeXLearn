import styles from '@/styles/Article.module.css'

const data = [
  { Operacion: 'Sumar', operador: '+', ejemplo: 'x+y'},
  { Operacion: 'Restar', operador: '-', ejemplo: 'x-y'},
  { Operacion: 'Multiplicar', operador: '*', ejemplo: 'x*y'},
  { Operacion: 'Dividir', operador: '/', ejemplo: 'x/y'},
  { Operacion: 'Modulo', operador: '%', ejemplo: 'x%y'},
];

export default function TablaOperadoresAritmeticos() {
  return (
    <div className={styles.tables}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Operacion</th>
            <th>Operador</th>
            <th>Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((fila, index) => (
            <tr key={index}>
              <td>{fila.Operacion}</td>
              <td>{fila.operador}</td>
              <td>{fila.ejemplo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
