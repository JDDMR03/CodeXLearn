import styles from '@/styles/Article.module.css'

const data = [
  { tipo: 'int', declaracion: 'int var;', description: 'Solo numeros enteros', limiteInferior: '-2147483648', limiteSuperior: '2147483647' },
  { tipo: 'float', declaracion: 'float var;', description: 'Admite numero con un decimal flotante', limiteInferior: '1.17549e-38', limiteSuperior: '3.40282e+38' },
  { tipo: 'char', declaracion: 'char var;', description: 'Solo caracteres ASCII', limiteInferior: '-128 (ASCII)', limiteSuperior: '127 (ASCII)' },
  { tipo: 'string', declaracion: 'string var;', description: 'Cadena de caracteres ASCII', limiteInferior: '0 caracteres', limiteSuperior: '200 caracteres (aprox)' },
  { tipo: 'bool', declaracion: 'bool var;', description: 'Solo 0 o 1 (false o true)', limiteInferior: '0', limiteSuperior: '1' },
];

export default function TablaTiposDatos() {
  return (
    <div className={styles.tables}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Tipo de dato</th>
            <th>Declaración</th>
            <th>Descripcion</th>
            <th>Límite inferior</th>
            <th>Límite superior</th>
          </tr>
        </thead>
        <tbody>
          {data.map((fila, index) => (
            <tr key={index}>
              <td>{fila.tipo}</td>
              <td>{fila.declaracion}</td>
              <td>{fila.description}</td>
              <td>{fila.limiteInferior}</td>
              <td>{fila.limiteSuperior}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

