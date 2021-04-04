import React, {useState, useEffect} from 'react'
import AddInput from './components/AddInput';
import axios from 'axios';


function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos(){
      await axios.get('http://localhost:8000/todos').then(e => setTodos(e.data)).then(
        console.log(todos)
      )
    }
    getTodos()
  }, [])

  function deleteTodo(id){
    console.log(id)
    axios.delete(`http://localhost:8000/todos/${id}`)
    const newTodos2 = todos.filter(e => e._id !== id)
    setTodos(newTodos2)
  }

  return (
    <div>
      <AddInput todos={todos} setTodos={setTodos} />
      {todos.map(i => (
        <div key={i._id} style={{display: 'flex'}}>
        <p>{i.title}</p><button type="submit" onClick={() => deleteTodo(i._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default App
