import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FunctionComponent } from 'react'
import { Employee } from '../interfaces/Employee'

export interface UserCountProps {
  employees: Employee[]
}

const UserCount: FunctionComponent<UserCountProps> = ({ employees }: UserCountProps) => {
  return (
    <div className="my-4 card rounded">
      <div className="card-body d-flex justify-content-around align-items-center px-3">
        <FontAwesomeIcon className="fa__icon" icon={faUser} />
        <h2 className="m-0">{employees.length}</h2>
      </div>
    </div>
  )
}

export default UserCount
