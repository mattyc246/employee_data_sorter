import { mount, shallow } from "enzyme"
import React from "react"
import { UserCount } from ".."

const employees = [
    {
    id: 1016,
    employeeId: "47ef498e-236b-4e15-9a6a-519b3a9e8424",
    fullname: "Lindsey Guzman",
    firstname: "Lindsey",
    lastname: "Guzman",
    dateJoined: "Sat Oct 27 1973 08:52:45 GMT+0730 (Malaysia Time)",
    salary: 10291
  },
  {
    id: 1017,
    employeeId: "e5c84741-ae24-462b-936c-29484aa0b9db",
    fullname: "Russo Cabrera",
    firstname: "Russo",
    lastname: "Cabrera",
    dateJoined: "Mon Apr 29 2002 10:48:37 GMT+0800 (Malaysia Time)",
    salary: 10693
  },
]

describe("User count component", () => {

  it('renders component without crashing', () => {
    const userCount = shallow(<UserCount employees={employees} />)
    expect(userCount).toMatchSnapshot()
  })

  it('accepts array of employees props', () => {
    const wrapper = mount(<UserCount employees={employees} />)
    expect(wrapper.props().employees).toEqual(employees)
  })

  it('will display the correct number of employees', () => {
    const wrapper = mount(<UserCount employees={employees} />)
    const count = wrapper.find('h2').text()
    expect(count).toEqual(employees.length.toString())
  })
})