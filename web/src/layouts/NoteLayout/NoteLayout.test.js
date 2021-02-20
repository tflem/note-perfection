import { render } from '@redwoodjs/testing'

import NoteLayout from './NoteLayout'

describe('NoteLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NoteLayout />)
    }).not.toThrow()
  })
})
