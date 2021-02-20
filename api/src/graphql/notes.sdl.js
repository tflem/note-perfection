export const schema = gql`
  type Note {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    notes: [Note!]!
    note(id: Int!): Note
  }

  input CreateNoteInput {
    title: String!
    body: String!
  }

  input UpdateNoteInput {
    title: String
    body: String
  }

  type Mutation {
    createNote(input: CreateNoteInput!): Note!
    updateNote(id: Int!, input: UpdateNoteInput!): Note!
    deleteNote(id: Int!): Note!
  }
`
