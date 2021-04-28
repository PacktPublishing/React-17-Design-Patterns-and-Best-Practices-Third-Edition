// Dependencies
import { gql } from '@apollo/client'

export default gql`
  query getUserData($at: String!) {
    getUserData(at: $at) {
      id
      email
      username
      privilege
      active
    }
  }
`
