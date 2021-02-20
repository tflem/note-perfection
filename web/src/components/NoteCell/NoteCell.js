import Note from 'src/components/Note'

export const QUERY = gql`
  query FIND_NOTE_BY_ID($id: Int!) {
    note: note(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Note not found</div>

export const Success = ({ note }) => {
  return <Note note={note} />
}
