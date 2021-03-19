import React from 'react';
import './App.scss';
import { EmployeeContext, useEmployeeContext } from './context/employeeContext';

const App = () => {
  const employeeContextValue = useEmployeeContext()

  return (
    <div id="app">
      <EmployeeContext.Provider value={employeeContextValue}>
        <h1>App</h1>
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;
