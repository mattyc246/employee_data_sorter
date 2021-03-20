import React, { FunctionComponent, useContext, useEffect } from "react"
import { EmployeeContext } from "../context/employeeContext"
import Loader from "./Loader"

const EmployeeDisplay: FunctionComponent = () => {
  const {fetchEmployees, fetchingEmployees} = useContext(EmployeeContext)

  useEffect(() => {
    fetchEmployees()
  })

  return (
    <div className="h-100 w-100 d-flex align-items-center justify-content-center">
      {
        fetchingEmployees ? <Loader color="#ffcccc" size={75} /> : (
          <h1>Employee Display</h1>
        )
      }
    </div>
  )
}

export default EmployeeDisplay
