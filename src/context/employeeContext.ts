import { Employee } from "../interfaces/Employee";

export interface EmployeeContextData {
  employees: Employee[];
  fetchingEmployees: boolean;
  fetchEmployees: () => void;
}