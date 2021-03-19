import React from 'react';
import './App.scss';
import { EmployeeDisplay } from './components';
import { EmployeeContext, useEmployeeContext } from './context/employeeContext';

const App = () => {
  const employeeContextValue = useEmployeeContext()

  return (
    <div id="app">
      <EmployeeContext.Provider value={employeeContextValue}>
        <EmployeeDisplay />
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;
