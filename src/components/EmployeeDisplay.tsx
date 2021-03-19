import React, { FunctionComponent, useContext, useEffect } from "react"
import { EmployeeContext } from "../context/employeeContext"
import Loader from "./Loader"

const EmployeeDisplay: FunctionComponent = () => {
  const {fetchEmployees, fetchingEmployees} = useContext(EmployeeContext)

  useEffect(() => {
    fetchEmployees()
  })

  if(fetchingEmployees){
    return (
      <div className="h-100 w-100 d-flex align-items-center justify-content-center">
        <Loader color="#ffcccc" size={75}/>
      </div>
    )
  }

  return (
    <h1>Employee Display</h1>
  )
}

export default EmployeeDisplay
