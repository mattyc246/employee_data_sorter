import { mount } from "enzyme"
import React from "react"
import { EmployeeRanking } from ".."

const highestEarner = {
  id: 1016,
  employeeId: "47ef498e-236b-4e15-9a6a-519b3a9e8424",
  fullname: "Lindsey Guzman",
  firstname: "Lindsey",
  lastname: "Guzman",
  dateJoined: "Sat Oct 27 1973 08:52:45 GMT+0730 (Malaysia Time)",
  salary: 11000
}

const newestEmployee = {
  id: 1017,
  employeeId: "e5c84741-ae24-462b-936c-29484aa0b9db",
  fullname: "Russo Cabrera",
  firstname: "Russo",
  lastname: "Cabrera",
  dateJoined: "Mon Apr 29 2002 10:48:37 GMT+0800 (Malaysia Time)",
  salary: 10693
}

const employees = [
  highestEarner,
  newestEmployee
]

describe("Employee ranking component", () => {

  it('accepts and array of employees', () => {
    const wrapper = mount(<EmployeeRanking employees={employees} />)
    expect(wrapper.props().employees).toEqual(employees)
  })

  it('will display the correct highest earning employee', () => {
    const wrapper = mount(<EmployeeRanking employees={employees} />)
    const employee = <p>{highestEarner.fullname}</p>

    expect(wrapper.contains(employee)).toEqual(true)
  })

  it('will display the correct newest employee', () => {
    const wrapper = mount(<EmployeeRanking employees={employees} />)
    const employee = <p>{newestEmployee.fullname}</p>

    expect(wrapper.contains(employee)).toEqual(true)
  })

  it('should contain 2 subtitles', () => {
    const wrapper = mount(<EmployeeRanking employees={employees} />)

    expect(wrapper.find('h5').length).toBe(2)
  })
})