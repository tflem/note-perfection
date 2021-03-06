import {Link, routes } from '@redwoodjs/router'
import NotePost from 'src/components/NotePost'

export const QUERY = gql`
  query NotePostsQuery {
    notes {
      id
      title
      body
      createdAt
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ notes }) => {
  return notes.map((note) => <NotePost key={note.id} note={note}/>)
}
