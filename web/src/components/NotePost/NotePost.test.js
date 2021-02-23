import { render } from '@redwoodjs/testing'

import NotePost from './NotePost'

describe('NotePost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotePost />)
    }).not.toThrow()
  })
})
