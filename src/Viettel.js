import React from 'react'

class Viettel extends React.Component {
  render() {
    return (
      <div>
        <div><b style={{ fontSize: 19 }}>{this.props.stt}. Software Developer at Viettel Software Center </b> <i>(2014 - 2016)</i>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <ul style={{ marginBottom: 6 }}>
            <li>Develop features assigned by the leader (both frontend and backend side)</li>
            <li>Do weekly code-review with team </li>
            <li>Propose changes to improve the project</li>
          </ul>
          <i>Technologies used in the project:</i>
          <ul>
            <li>Primefaces, Springframework, Oracle DB, SOLR search engine</li>
          </ul>
        </div>
      </div>
    )
  }
}


export default Viettel