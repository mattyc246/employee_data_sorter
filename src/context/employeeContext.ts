import { createContext, useState } from 'react'
import { Employee } from "../interfaces/Employee";

export interface EmployeeContextData {
  employees: Employee[];
  fetchingEmployees: boolean;
  fetchEmployees: () => void;
}

export const employeeContextDefaultVal: EmployeeContextData = {
  employees: [],
  fetchingEmployees: true,
  fetchEmployees: () => null
}

export const useEmployeeContext = (): EmployeeContextData => {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [fetchingEmployees, setFetchingEmployees] = useState<boolean>(true)

  const fetchEmployees = () => {}

  return {
    employees,
    fetchingEmployees,
    fetchEmployees
  }
}

export const EmployeeContext = createContext<EmployeeContextData>(employeeContextDefaultVal)