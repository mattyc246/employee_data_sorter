import React, { FunctionComponent, useEffect, useState } from 'react'
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
    <div className="card rounded">
      <div className="card-body">
        <p>
          {
            highestEarner ? highestEarner.firstname : "-"
          }
        </p>
        <p>
          {
            mostRecent ? mostRecent.firstname : "-"
          }
        </p>
      </div>
    </div>
  )
}

export default EmployeeRanking
