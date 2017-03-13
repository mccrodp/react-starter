import React from 'react'

module.exports = function SampleForm (props) {

  if (props.loading) {
    return <div>Loading...</div>
  }

  if (props.error) {
    return <div style={{color: 'red'}}>{props.error.toString()}</div>
  }

  const conditional = props.progress ?
  <div>This is a {props.message}</div> :
  <button type="submit" value="Submit" disabled={props.disabled}>Submit</button>;

  return (
    <form>
      <label>
        Text:
        <input type="text" value={props.text} /> <br />
        Checkbox:
        <input type="checkbox" name="vehicle" value="Bike" checked={props.checked}/> <br />
      </label>
      {conditional}
    </form>
  );

  return <div>Nothing loaded</div>
}
