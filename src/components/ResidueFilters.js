import React from 'react';
import '../styles/ResidueFilters.css';

const ResidueFilters = () => {
  return (
    <div className="residue-filters">
      <div className="filter-group">
        <label htmlFor="date-range">Intervalo de Datas:</label>
        <div className='date-content'>
          <input type="date" id="start-date" name="start-date" />
          <span>até</span>
          <input type="date" id="end-date" name="end-date" />
        </div>
      </div>
      <div className="filter-group">
        <label htmlFor="location">Localização:</label>
        <select id="location" name="location">
          <option value="all">Todas</option>
          <option value="praia1">Praia 1</option>
          <option value="praia2">Praia 2</option>
          <option value="praia3">Praia 3</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="type">Tipo de Resíduo:</label>
        <select id="type" name="type">
          <option value="all">Todos</option>
          <option value="plastico">Plástico</option>
          <option value="metal">Metal</option>
          <option value="vidro">Vidro</option>
          <option value="organico">Orgânico</option>
        </select>
      </div>
      <button className="apply-filters">Aplicar Filtros</button>
    </div>
  );
};

export default ResidueFilters;