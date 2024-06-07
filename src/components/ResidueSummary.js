import React from 'react';
import '../styles/ResidueSummary.css';

const ResidueSummary = () => {
  return (
    <div className="residue-summary">
      <h2>Resumo dos Resíduos</h2>
      <div className="summary-cards">
        <div className="summary-card">
          <h3>Total Coletado</h3>
          <p>1,200 kg</p>
        </div>
        <div className="summary-card">
          <h3>Plástico</h3>
          <p>600 kg</p>
        </div>
        <div className="summary-card">
          <h3>Metal</h3>
          <p>300 kg</p>
        </div>
        <div className="summary-card">
          <h3>Vidro</h3>
          <p>200 kg</p>
        </div>
        <div className="summary-card">
          <h3>Orgânico</h3>
          <p>100 kg</p>
        </div>
      </div>
    </div>
  );
};

export default ResidueSummary;