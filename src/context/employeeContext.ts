import axios from 'axios';
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

  const fetchEmployees = () => {
    axios.get("https://gist.githubusercontent.com/yousifalraheem/354fb07f27f3c145b78d7a5cc1f0da0b/raw/7561f6827775c6a002a93b6b99b12c3c9454a617/data.json")
    .then(res => {
      setEmployees(res.data)
      setTimeout(() => {
        setFetchingEmployees(false)
      }, 1500)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return {
    employees,
    fetchingEmployees,
    fetchEmployees
  }
}

export const EmployeeContext = createContext<EmployeeContextData>(employeeContextDefaultVal)