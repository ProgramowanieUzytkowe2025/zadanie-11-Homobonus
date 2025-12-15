export default function AppCalculationHistory({ history, onRestore }) {
  return (
    <div className="mt-4">
      <h5>Historia obliczeń</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>A</th>
            <th>B</th>
            <th>Operacja</th>
            <th>Wynik</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item.a}</td>
              <td>{item.b}</td>
              <td>{item.operation}</td>
              <td>{item.result}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => onRestore(index)}
                >
                  Przywróć
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
