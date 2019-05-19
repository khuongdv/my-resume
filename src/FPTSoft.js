import React from 'react'

class FPTSoftware extends React.Component {
  render() {
    return (
      <div>
      <div><b  style={{fontSize: 19}}>{this.props.stt}. Backend Developer at FPTSoftware Co.</b> <i>(2016 - 2017)</i>
      </div>
      <div style={{paddingLeft: 10}}>
        <ul style={{marginBottom: 6}}>
          <li>Develop API for the frontend side, propose improments for the backend side</li>
          <li>Daily meeting with client to discuss business changes or new features</li>
          <li>Teach Android development to other guys in the department</li>
        </ul>
        <i>Technologies used in the project:</i>
        <ul>
          <li>AngularJS, Jersey, MongoDB, iText</li>
        </ul>
      </div>
    </div>
    )
  }
}


export default FPTSoftware