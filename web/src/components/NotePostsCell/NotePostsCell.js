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
  return notes.map((note) => (
    <article key={note.id}>
      <header>
        <h2>{note.title}</h2>
        <p>{note.body}</p>
        <div>Noted Posted at: {note.createdAt}</div>
      </header>
    </article>
  ))
}
