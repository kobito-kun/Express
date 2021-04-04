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
    
    async function addTodo(){
        await axios.put("http://localhost:8000/todos/", {
            "title": inputTitle,
            "content": inputContent
        }).then(e => {
            const newTodos = [...todos, e.data]
            setTodos(newTodos)
        })

        setInputContent("")
        setInputTitle("")
    }

    return (
        <div>
            <input value={inputTitle} onChange={setTheInputTitleLmao} />
            <input value={inputContent} onChange={setTheInputContentLmao} />
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default AddInput
