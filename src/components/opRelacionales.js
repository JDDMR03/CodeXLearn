import styles from '@/styles/Article.module.css'

const data = [
  { Operacion: 'Mayor que', operador: '>', ejemplo: 'a > b', description: 'a mayor que b'},
  { Operacion: 'Mayor igual que', operador: '>=', ejemplo: 'a >= b', description: 'a mayor o igual que b'},
  { Operacion: 'Menor que', operador: '<', ejemplo: 'a < b', description: 'a menor que b'},
  { Operacion: 'Menor igual que', operador: '<=', ejemplo: 'a <= b', description: 'a menor o igual que b'},
  { Operacion: 'Diferente que', operador: '!=', ejemplo: 'a != b', description: 'a diferente que b'},
];

export default function TablaOperadoresRelacionales() {
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
