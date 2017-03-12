import React from 'react'
import { render } from 'react-dom'

// import Sample from './containers/Sample/state'
import SampleForm from './containers/SampleForm/state'

render(
  <SampleForm />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
