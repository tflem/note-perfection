import { Link, routes } from '@redwoodjs/router'

const NoteLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Note Perfection</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.notes()}>Notes</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default NoteLayout
