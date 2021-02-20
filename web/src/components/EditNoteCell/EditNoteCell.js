import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import NoteForm from 'src/components/NoteForm'

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
const UPDATE_NOTE_MUTATION = gql`
  mutation UpdateNoteMutation($id: Int!, $input: UpdateNoteInput!) {
    updateNote(id: $id, input: $input) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ note }) => {
  const { addMessage } = useFlash()
  const [updateNote, { loading, error }] = useMutation(UPDATE_NOTE_MUTATION, {
    onCompleted: () => {
      navigate(routes.notes())
      addMessage('Note updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateNote({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Note {note.id}</h2>
      </header>
      <div className="rw-segment-main">
        <NoteForm note={note} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
