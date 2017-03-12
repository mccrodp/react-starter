import React from 'react'

import Component from './index.js'

const presets = {}

presets.init = {
  text: '',
  checked: false,
  disabled: true
}

presets.disabled = {
  ...presets.init,
  disabled: true
}

presets.enabled = {
  ...presets.init,
  disabled: false
}

presets.progress = {
  ...presets.init,
  message: "Submitting..."
}

presets.error = {
  ...presets.init,
  error: new Error('something bad happened')
}

// stateful container
module.exports = React.createClass({
  displayName: 'State',

  getInitialState: function () {
    return presets.progress
  },

  render: function () {
    return <Component {...this.state} />
  }
})
