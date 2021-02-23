import { Link, routes } from '@redwoodjs/router'

const NotePost = ({ note }) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.notePost({ id: note.id })}>{note.title}</Link>
        </h2>
      </header>
      <div>{note.body}</div>
    </article>
  )
}

export default NotePost
