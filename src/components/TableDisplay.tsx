import moment from 'moment'
import React, { FunctionComponent, useMemo, useState } from 'react'
import { Employee } from '../interfaces/Employee'

export interface TableProps {
  employees: Employee[]
}

export interface Filter {
  column: string;
  sort: string;
}

const TableDisplay: FunctionComponent<TableProps> = ({employees}: TableProps) => {
  const [sortedEmployees, setSortedEmployees] = useState<Employee[]>([])
  const [filter, setFilter] = useState<Filter>({column: 'dateJoined', sort: 'desc'})

  useMemo(() => {
    let employeesCopy = [...employees]

    switch (filter.column) {
      case "dateJoined":
        employeesCopy.sort((a,b) => {
          const res = new Date(a.dateJoined).getTime() - new Date(b.dateJoined).getTime()
          return filter.sort === 'desc' ? -res : res
        })
        break;
      case "salary":
        employeesCopy.sort((a,b) => {
          const res = a.salary - b.salary
          return filter.sort === 'desc' ? -res : res
        })
        break;
      case "name":
        filter.sort === 'desc' ? employeesCopy.sort().reverse() : employeesCopy.sort()
        break;
      default:
        employeesCopy.sort((a,b) => {
          return new Date(a.dateJoined).getTime() - new Date(b.dateJoined).getTime()
        })
        break;
    }

    setSortedEmployees(employeesCopy)
  }, [employees, filter])

  const handleSort = (column: string) => {
    let newFilter = {
      column,
      sort: filter.sort === 'desc' ? 'asc' : 'desc'
    }
    setFilter(newFilter)
  }

  return (
    <div className="card rounded">
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>
                <button className="table__sort__button">Employee Name</button>
              </th>
              <th>
                <button className="table__sort__button">Date Joined</button>
              </th>
              <th>
                <button className="table__sort__button">Salary (MYR)</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              sortedEmployees.length > 0
                ? sortedEmployees.map((employee: Employee) => {
                return(
                  <tr key={employee.employeeId}>
                    <td>{employee.fullname}</td>
                    <td>{moment(employee.dateJoined).format("Do MMMM YYYY")}</td>
                    <td>MYR {employee.salary.toFixed(2)}</td>
                  </tr>
                )
              }) : (
                <tr>
                  <td colSpan={3}>
                    <h5 className="text-center my-3">No Data To Display</h5>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableDisplay
