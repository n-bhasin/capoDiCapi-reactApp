import React from "react";

const LogTable = (props) => {
  const { logs, onSort } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("logtype")}>Log Type</th>
          <th onClick={() => onSort("name")}>Name</th>
          <th onClick={() => onSort("message")}>Message</th>
          <th onClick={() => onSort("date")}>Date</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, index) => (
          <tr key={log._id}>
            <td>{log.logType}</td>
            <td>{log.name}</td>
            <td>{log.message}</td>
            <td>{log.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LogTable;
