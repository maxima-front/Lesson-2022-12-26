// Dependencies
import React, { Component } from 'react'
import axios from 'axios'

class Issues extends Component {
  constructor(props) {
    super(props)

    this.state = {
      issues: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/repos/ContentPI/ContentPI/issues')
      .then((response) => {
        this.setState({
          issues: response.data
        })
      })
  }

  render() {
    const { issues = [] } = this.state

    return (
      <>
        <h1>ContentPI Issues</h1>

        {issues.map((issue) => (
          <p>
            <strong>#{issue.number}</strong> {' '}
            <a href={`https://github.com/ContentPI/ContentPI/issues/${issue.number}`} target="_blank" rel="noreferrer">{issue.title}</a> {' '}
            {issue.state}
          </p>
        ))}
      </>
    )
  }
}

export default Issues