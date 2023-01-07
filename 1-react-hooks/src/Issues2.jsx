import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Issues = () => {

  const [issues, setIssues] = useState([])

  useEffect(() => {
    axios
      .get('https://api.github.com/repos/ContentPI/ContentPI/issues')
      .then((response) => {
        setIssues(response.data)
      })

    return () => { console.log('finish!') }
  }, [])

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

export default Issues