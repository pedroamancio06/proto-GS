import React from 'react';
import ResidueTable from '../components/ResidueTable';
import ResidueChart from '../components/ResidueChart';
import ResidueSummary from '../components/ResidueSummary';
import ResidueFilters from '../components/ResidueFilters';
import RecentLogs from '../components/RecentLogs';
import '../styles/MonitoringDashboard.css';

const MonitoringDashboard = () => {
  return (
    <div className='dashboard-container'>
      <h1>Dashboard de Monitoramento</h1>

      <div className="monitoring-dashboard">
        
        <div className='dashboard-sumary'>
          <ResidueSummary />
        </div>
        
        <div className='dashboard-content'>
          <ResidueFilters />
          <div className="dashboard-info">
            <ResidueTable />
            <ResidueChart />
          </div>
          <RecentLogs />
        </div>

      </div>
    </div>
  );
};

export default MonitoringDashboard;
