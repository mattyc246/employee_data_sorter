import React, { FunctionComponent, useEffect, useState } from 'react'
import moment from "moment"
import { Employee } from '../interfaces/Employee'

export interface EmployeeRankingProps {
  employees: Employee[]
}

const EmployeeRanking: FunctionComponent<EmployeeRankingProps> = ({ employees }: EmployeeRankingProps) => {
  const [highestEarner, setHighestEarner] = useState<Employee | null>(null)
  const [mostRecent, setMostRecent] = useState<Employee | null>(null)

  useEffect(() => {
    const maxSalary = employees.reduce((last, current) => {
      return (last.salary > current.salary) ? last : current
    })

    setHighestEarner(maxSalary)

    const recent = employees.reduce((last, current) => {
      const lastDate = new Date(last.dateJoined).getTime()
      const currentDate = new Date(current.dateJoined).getTime()

      return (lastDate > currentDate) ? last : current
    })

    setMostRecent(recent)

  }, [employees])

  return (
    <div className="card my-2 shadow rounded-xl">
      <div className="card-body">
        <div className="row h-50 mb-3 align-items-center">
          <div className="col-12 col-md-6">
            <h5>Highest Earning Employee:</h5>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex flex-wrap badge badge-success justify-content-between align-items-center p-3">
              <p>{highestEarner ? highestEarner.fullname : "-"}</p>
              <p>MYR {highestEarner ? highestEarner.salary.toFixed(2) : "-"}</p>
            </div>
          </div>
        </div>
        <div className="row h-50 align-items-center">
          <div className="col-12 col-md-6">
            <h5>Most Recent Employee:</h5>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex flex-wrap badge badge-success justify-content-between align-items-center p-3">
              <p>{mostRecent ? mostRecent.fullname : "-"}</p>
              <p>{mostRecent ? moment(mostRecent.dateJoined).format("Do MMMM YYYY") : '-'}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EmployeeRanking
