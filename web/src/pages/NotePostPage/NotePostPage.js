import NoteLayout from 'src/layouts/NoteLayout'
import NotePostCell from 'src/components/NotePostCell'

const NotePostPage = ({ id }) => {
  return (
    <NoteLayout>
      <NotePostCell id={id} />
    </NoteLayout>
  )
}

export default NotePostPage

