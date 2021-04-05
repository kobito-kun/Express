import React, {useState} from 'react'
import axios from 'axios';

function AddInput({todos, setTodos}) {
    const [inputTitle, setInputTitle] = useState();
    const [inputContent, setInputContent] = useState();

    function setTheInputTitleLmao(e){
        setInputTitle(e.target.value)
    }
    
    function setTheInputContentLmao(e){
        setInputContent(e.target.value)
    }
    
    function addTodo(){
        axios.put("http://localhost:8000/todos/", {
            title: inputTitle,
            content: inputContent
        }).then(e => {
            const newTodos = [...todos, e.data]
            setTodos(newTodos)
        })

        setInputContent("")
        setInputTitle("")
    }

    return (
        <div className="bg-blue-200 p-4 rounded-lg">
            <input className="border-2 border-blue-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-purple-400 rounded-lg bg-transparent rounded m-1" placeholder="Title" value={inputTitle} onChange={setTheInputTitleLmao} />
            <input className="border-2 border-blue-400 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-purple-400 rounded-lg bg-transparent rounded m-1" placeholder="Content" value={inputContent} onChange={setTheInputContentLmao} />
            <button className="text-white font-bold bg-blue-400 border-blue-400 border-2 py-2 px-4 rounded-lg shadow" onClick={addTodo}>Add</button>
        </div>
    )
}

export default AddInput
