import React from 'react';
import '../styles/ResidueTable.css';

const ResidueTable = () => {
  const residues = [
    { id: 1, location: 'Local 1', quantity: 120, timestamp: '2024-06-05 10:00:00' },
    { id: 2, location: 'Local 2', quantity: 60, timestamp: '2024-06-05 11:00:00' },
    { id: 2, location: 'Local 3', quantity: 20, timestamp: '2024-06-05 15:00:00' },
    // ...more mock data
  ];

  return (
    <div className="residue-table">
      <h2>Resíduos Coletados</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Localização</th>
            <th>Quantidade</th>
            <th>Data e Horário</th>
          </tr>
        </thead>
        <tbody>
          {residues.map(residue => (
            <tr key={residue.id}>
              <td>{residue.id}</td>
              <td>{residue.location}</td>
              <td>{residue.quantity}</td>
              <td>{residue.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResidueTable;