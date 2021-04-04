import React, {useState, useEffect} from 'react'
import AddInput from './components/AddInput';
import axios from 'axios';
import './tailwind.css';

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

  function updateComplete(i){
    console.log(i)
    const update = {
      "title": i.title,
      "content": i.content,
      "complete": !i.complete
    }
    axios.patch(`http://localhost:8000/todos/${i._id}`, update)
    .then(() => {
      const filteredTodos = todos.filter(a => a._id !== i._id)
      setTodos([...filteredTodos, update])
    })
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 via-red-400 to-blue-600 h-screen">
      <div className="bg-blue-200 py-4 px-8 rounded-lg shadow">
      <h1 className="font-bold text-4xl text-center">Todo List</h1>
      <AddInput todos={todos} setTodos={setTodos} />
      {todos.map(i => (
        <div key={i._id} className="grid shadow-lg grid-cols-2 bg-blue-200 my-1 border-l-2 border-red-500 rounded-r-lg transform hover:scale-110 duration-300">
          <p className="py-2 m-2 font-bold text-lg">{i.title}</p>
          <div className="text-right">
            <button className="px-4 rounded-lg shadow py-2 bg-blue-400 m-2 text-white font-bold" onClick={() => updateComplete(i)} type="submit">{i.complete ? "Yes" : "No"}</button><button className="px-4 rounded-lg shadow py-2 bg-blue-400 m-2 text-white font-bold" type="submit" onClick={() => deleteTodo(i._id)}>Delete</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default App
