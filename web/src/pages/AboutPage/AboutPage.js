import { Link, routes } from '@redwoodjs/router'
import NoteLayout from 'src/layouts/NoteLayout'

const AboutPage = () => {
  return (
    <NoteLayout>
      <p>
        This site was created to demonstrate my mastery of Redwood: Look on my
        works, ye mighty, and D-E-S-P-A-I-R!
      </p>
    </NoteLayout>
  )
}

export default AboutPage
