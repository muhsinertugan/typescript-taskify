import React from 'react'
import { Todo } from '../../Model'
import "./styles.css"
import TodoCard from './TodoCard'

interface  PropsInterface {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,

}

const TodoList :React.FC<PropsInterface> = ({todos, setTodos}:PropsInterface ) => {


  return (
    <div className='todos'>
        <div>{todos.map((element)=><li><TodoCard todoEl={element} key={element.id} todos={todos} setTodos={setTodos} ></TodoCard></li>)}</div>

    </div>
  )
}

export default TodoList