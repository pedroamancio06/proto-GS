import React from 'react';
import '../styles/RecentLogs.css';

const RecentLogs = () => {
  const logs = [
    { id: 1, message: 'Coleta realizada no Local 2', timestamp: '2024-06-05 11:00:00' },
    { id: 2, message: 'Coleta realizada no Local 3', timestamp: '2024-06-05 15:00:00' },
    // ...more mock logs
  ];

  return (
    <div className="recent-logs">
      <h2>Logs Recentes</h2>
      <ul>
        {logs.map(log => (
          <li key={log.id}>
            <span>{log.timestamp}</span> - <span>{log.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentLogs;