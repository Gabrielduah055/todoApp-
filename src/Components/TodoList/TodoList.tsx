import React, {useState} from 'react'
import './todolist.css'

type itemsProp = {
    id:number;
    text:string;
    isCompleted:Boolean;
}

const TodoList:React.FC = () => {
    const [todos, setTodos] = useState<itemsProp[]> ([
        {id:1, text:"Garlic", isCompleted:false},
        {id:2, text:"Pepper", isCompleted:false},
        {id:3, text:"Mango", isCompleted:false},
    ])
    const [todoInput, setTodoInput] = useState<string>("")

    const handleToggle = (id:number)=> {
        setTodos(
            todos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, isCompleted: ! todo.isCompleted}
                }
                return todo;
            })
        )
    }

    const HandleInput = () => {
        const newTodo: itemsProp = {id:Date.now(), text:todoInput, isCompleted:false};
        setTodos([...todos, newTodo])
    }
  return (
    <div className='wrapper'>
      <div className="todoInput">
        <input type="text" 
               placeholder='enter grocery' 
               onChange={(e) => setTodoInput(e.currentTarget.value)}
               />
        <button type='submit'
                onClick={HandleInput}>Add</button>
      </div>

      <div className="todoListContainer">
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}
                    onClick={()=>handleToggle(todo.id)}
                    style={{textDecoration:todo.isCompleted ? "line-through" : 'none'}}>
                    <span>{todo.text}</span>
                    <i className="uil uil-trash-alt"></i>    
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList
