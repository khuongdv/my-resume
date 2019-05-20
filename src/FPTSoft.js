import React from 'react'

class FPTSoftware extends React.Component {
  render() {
    return (
      <div>
        <div><b style={{ fontSize: 19 }}>{this.props.stt}. Backend Developer at FPTSoftware Co.</b> <i>(2016 - 2017)</i>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <i>About the project</i>
          <ul style={{ marginBottom: 6 }}>
            <li>To build a system stands at the middle between Intuit Quickbooks and Esker platform, helps users to deliver documents to their customers.</li>
            <li>Each document can be sent as an email or a mail, its status is tracked</li>
            <li>Team size: 5</li>
          </ul>
          <i>Responsibilities:</i>
          <ul style={{ marginBottom: 6 }}>
            <li>Develop API for the frontend side, propose improments for the backend side</li>
            <li>Daily meeting with client to discuss business changes or new features</li>
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