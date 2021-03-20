import React, { FunctionComponent, useContext, useEffect } from "react"
import { EmployeeContext } from "../context/employeeContext"
import Loader from "./Loader"
import UserCount from "./UserCount"

const EmployeeDisplay: FunctionComponent = () => {
  const {employees ,fetchEmployees, fetchingEmployees} = useContext(EmployeeContext)

  useEffect(() => {
    fetchEmployees()
  })

  return (
    <div className="h-100 w-100 d-flex align-items-center justify-content-center">
      {
        fetchingEmployees ? <Loader color="#ffcccc" size={75} /> : (
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-4">
                <UserCount employees={employees} />
              </div>
              <div className="col-12 col-sm-6 col-lg-8"></div>
              <div className="col-12"></div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default EmployeeDisplay
