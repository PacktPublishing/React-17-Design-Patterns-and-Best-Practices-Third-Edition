// Dependencies
import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'

// Types
type Issue = {
  number: number
  title: string
  url: string
  state: string
}

const Issues: FC = () => {
  // The useState hook replace this.setState
  const [issues, setIssues] = useState<Issue[]>([])

  // When we use the useEffect hook with an empty array [] on the deps (second parameter) 
  // this represents the componentDidMount method (will be executed when the component is mounted).
  useEffect(() => {
    axios
      .get('https://api.github.com/repos/ContentPI/ContentPI/issues')
      .then((response: any) => {
        // Here we update directly our issue state
        setIssues(response.data)
      })
  }, [])  

  return (
    <>
      <h1>ContentPI Issues</h1>

      {issues.map((issue: Issue) => (
        <p>
          <strong>#{issue.number}</strong> {' '}
          <a href={`https://github.com/ContentPI/ContentPI/issues/${issue.number}`} target="_blank">{issue.title}</a> {' '}
          {issue.state}
        </p>
      ))}
    </>
  )
}

export default Issues