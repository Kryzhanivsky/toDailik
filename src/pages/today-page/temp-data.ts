export interface ITask {
  id: number
  title: string
  isDone: boolean
  list: {
    id: number
    name: string
    color: HEXColor
  }
  subtasks: { id: number; title: string }[]
  dueDate: Date
}

export const tempData = [
  {
    id: 1,
    title: 'My super puper secret task 1',
    isDone: false,
    list: {
      id: 1,
      name: 'Personal',
      color: '#00ff00' as HEXColor,
    },
    subtasks: [{ id: 1, title: 'Some subtask' }],
    dueDate: new Date(),
  },
  {
    id: 2,
    title:
      'My super puper secret task 2 My super puper secret task 2 My super puper secret task 2 My super puper secret task 2 My super puper secret task 2 My super puper secret task 2',
    isDone: false,
    list: {
      id: 1,
      name: 'Work',
      color: '#ff0000' as HEXColor,
    },
    subtasks: [{ id: 1, title: 'Some subtask' }],
    dueDate: new Date(),
  },
  {
    id: 3,
    title: 'My super puper secret task 3',
    isDone: true,
    list: {
      id: 1,
      name: 'Personal',
      color: '#00ff00' as HEXColor,
    },
    subtasks: [{ id: 1, title: 'Some subtask' }],
    dueDate: new Date(),
  },
  {
    id: 4,
    title:
      'My super puper secret task 4 My super puper secret task 4 My super puper secret task 4 My super puper secret task 4 My super puper secret task 4My super puper secret task 4My super puper secret task 4My super puper secret task 4 My super puper secret task 4My super puper secret task 4My super puper secret task 4My super puper secret task 4My super puper secret task 4My super puper secret task 4My super puper secret task 4My super puper secret task 4My super puper secret task 4My super puper secret task 4',
    isDone: false,
    list: {
      id: 1,
      name: 'Personal',
      color: '#00ff00' as HEXColor,
    },
    subtasks: [
      { id: 1, title: 'Some subtask' },
      { id: 2, title: 'Some subtask' },
    ],
    dueDate: new Date(),
  },
  {
    id: 5,
    title: 'My super puper secret task 5',
    isDone: false,
    list: {
      id: 1,
      name: 'Work',
      color: '#ff0000' as HEXColor,
    },
    subtasks: [{ id: 1, title: 'Some subtask' }],
    dueDate: new Date(),
  },
]
