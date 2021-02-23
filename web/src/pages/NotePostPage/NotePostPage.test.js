import { render } from '@redwoodjs/testing'

import NotePostPage from './NotePostPage'

describe('NotePostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotePostPage />)
    }).not.toThrow()
  })
})
