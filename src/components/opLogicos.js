import styles from '@/styles/Article.module.css'

const data = [
  { Operacion: 'And', operador: '&&', ejemplo: 'a && b', description: 'a y b'},
  { Operacion: 'Or', operador: '||', ejemplo: 'a || b', description: 'a o b'},
  { Operacion: 'Not', operador: '!', ejemplo: '!a', description: 'no a'},
];

export default function TablaOperadoresLogicos() {
  return (
    <div className={styles.tables}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Operacion</th>
            <th>Operador</th>
            <th>Ejemplo</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {data.map((fila, index) => (
            <tr key={index}>
              <td>{fila.Operacion}</td>
              <td>{fila.operador}</td>
              <td>{fila.ejemplo}</td>
              <td>{fila.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
