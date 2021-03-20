import React, { FunctionComponent } from 'react'
import { Employee } from '../interfaces/Employee'

export interface UserCountProps {
  employees: Employee[]
}

const UserCount: FunctionComponent<UserCountProps> = ({ employees }: UserCountProps) => {
  return (
    <div className="w-100 card rounded">
      <div className="card-body d-flex justify-content-between">
        <h1>{employees.length}</h1>
      </div>
    </div>
  )
}

export default UserCount
