import NotePost from 'src/components/NotePost'

export const QUERY = gql`
  query NotePostQuery($id: Int!) {
    note(id: $id) {
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

export const Success = ({ note }) => {
  return <NotePost note={ note } />
}
