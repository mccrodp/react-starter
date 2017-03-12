import React from 'react'

module.exports = function SampleForm (props) {

  if (props.loading) {
    return <div>Loading...</div>
  }

  if (props.error) {
    return <div style={{color: 'red'}}>{props.error.toString()}</div>
  }

  if (props.progress) {
    console.log('ok');
    return (
      <form>
        <label>
          Texts:
          <input type="text" value={props.text} /> <br />
          Checkbox:
          <input type="checkbox" name="vehicle" value="Bike" checked={props.checked}/> <br />
        </label>
        <div>{props.message}</div>
      </form>
    );
  }

else {
  console.log('not ok');
  return (
    <form>
      <label>
        Text:
        <input type="text" value={props.text} /> <br />
        Checkbox:
        <input type="checkbox" name="vehicle" value="Bike" checked={props.checked}/> <br />
      </label>
      <button type="submit" value="Submit" disabled={props.disabled}>Submit</button>
    </form>
  );
}

  return <div>Nothing loaded</div>
}
