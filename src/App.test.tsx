import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

it('renders without crashing', () => {
  const app = shallow(<App />)

  expect(app).toMatchSnapshot()
})

it('renders the main title on the page', () => {
  const wrapper = shallow(<App />)
  const title = <h1 className="mx-auto d-block my-3">Employee Information</h1>

  expect(wrapper.contains(title)).toEqual(true)
})

