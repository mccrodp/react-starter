import React from 'react'
import SubmitButton from '../../components/SubmitButton'

module.exports = function SampleForm (props, actions) {
  if (props.error) {
    return <div style={{color: 'red'}}>{props.error.toString()}</div>
  }

  const canSubmit = props.text && props.isChecked

  return <form>
    <input type='text' value={props.text} onChange={actions.updateText()} />
    <input type='checkbox' checked={props.isChecked} onChange={actions.toggle()} />
    <SubmitButton canSubmit={canSubmit} isSubmitting={props.isSubmitting} onClick={actions.submitForm()} />
  </form>
}
