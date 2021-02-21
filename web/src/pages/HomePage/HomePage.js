import NoteLayout from 'src/layouts/NoteLayout'
import NotePostsCell from 'src/components/NotePostsCell'

const HomePage = () => {
  return (
    <NoteLayout>
      Home
      <NotePostsCell />
    </NoteLayout>
  )
}

export default HomePage
