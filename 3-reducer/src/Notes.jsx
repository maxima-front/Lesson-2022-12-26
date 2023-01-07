import { useReducer, useState} from 'react'

// state - useState - не глубоко вложенная структура

// useReducer - глубоко вложенная структура
// изменение разных веток структуры
// Своя ментальная модель


// state - объект состояния
// action - объект с типом события
// reducer - функция которая берет action, читает его тип, меняет state 

// action -> reducer -> меняет state

// то, что return reducer - то и в state
// action = { type, payload }


// dispatch - функция выполняет action


const actionType = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE'
}

const initialNotes = [
  {
    id: 1,
    note: 'Note 1'
  },
  {
    id: 2,
    note: 'Note 2'
  }
]

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD:
      return [...state, action.payload]

    case actionType.DELETE: 
      return state.filter(note => note.id !== action.payload)
    
    case actionType.UPDATE:
      const updatedNote = action.payload
      return state.map((n) => n.id === updatedNote.id ? updatedNote : n)
    
    default:
      return state
  }
}

const Notes = () => {
  const [notes, dispatch] = useReducer(reducer, initialNotes)
  
  const [note, setNote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newNote = {
      id: Date.now(),
      note
    }

    dispatch({ type: actionType.ADD, payload: newNote })
  }

  return (
    <div>
      <h2>Notes</h2>

      <ul>
        {notes.map((n) => (
          <li key={n.id}>
            {n.note} {' '}
            <button 
              onClick={() => dispatch({ 
                type: actionType.DELETE,
                payload: n.id
              })}
            >
              X
            </button>

            <button 
              onClick={() => dispatch({ 
                type: actionType.UPDATE,
                payload: {...n, note}
              })}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="New note" 
          value={note} 
          onChange={e => setNote(e.target.value)} 
        />
      </form>
    </div>
  )
}

export default Notes
