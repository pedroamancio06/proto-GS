import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import '../styles/ResidueChart.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

const ResidueChart = () => {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Resíduos Coletados',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };
  const lineDataWeek = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    datasets: [
      {
        label: 'Resíduos Coletados',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: '#0056b3',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  const barData = {
    labels: ['Local 1', 'Local 2', 'Local 3'],
    datasets: [
      {
        label: 'Quantidade de Resíduos',
        data: [300, 450, 200],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: ['Plástico', 'Metal', 'Vidro', 'Orgânico'],
    datasets: [
      {
        label: 'Tipos de Resíduos',
        data: [40, 20, 30, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="residue-chart">
      <h2>Gráficos de Resíduos</h2>
      <div className="chart-container">
        <div className="chart">
          <Line data={lineData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Resíduos Coletados por Mês' } } }} />
        </div>
        <div className="chart">
          <Line data={lineDataWeek} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Resíduos Coletados na semana' } } }} />
        </div>
        <div className="chart">
          <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Quantidade de Resíduos por Localização' } } }} />
        </div>
        <div className="chart">
          <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Tipos de Resíduos' } } }} />
        </div>
      </div>
    </div>
  );
};

export default ResidueChart;