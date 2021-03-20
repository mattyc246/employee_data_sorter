import React from 'react';
import './App.scss';
import { EmployeeDisplay } from './components';
import { EmployeeContext, useEmployeeContext } from './context/employeeContext';

const App = () => {
  const employeeContextValue = useEmployeeContext()

  return (
    <div id="app">
      <EmployeeContext.Provider value={employeeContextValue}>
        <h1 className="mx-auto text-center text-light d-block my-3">Employee Information</h1>
        <EmployeeDisplay />
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;
