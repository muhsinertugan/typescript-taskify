import React from 'react'
import "./styles.css"
import { Todo } from '../../Model'
import {AiFillEdit,AiFillDelete } from "react-icons/ai"
import{MdDone} from "react-icons/md"

interface PropsInterface{
    todoEl: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}



const TodoCard :React.FC<PropsInterface> = ({todoEl, todos, setTodos}: PropsInterface) => {

  const handleDone =(id: number)=>{
    setTodos(todos.map((todoEl)=> todoEl.id===id?{...todoEl, isDone: !todoEl.isDone}: todoEl))
  }
  const handleDelete =(id: number)=>{
    setTodos(todos.filter((todoEl)=> todoEl.id !==id))
  }

  return (
    <form className='todo-card'>
        
        {todoEl.isDone ? 
      (<s className='todo-card-text'> {todoEl.todo}</s>)
      :
      (<span className='todo-card-text'> {todoEl.todo}</span>)
      }

        <div>
            <span className='icon'><AiFillEdit></AiFillEdit></span>
            <span className='icon' onClick={()=>handleDelete(todoEl.id)}><AiFillDelete></AiFillDelete></span>
            {
            todoEl.isDone ? (
            <span className='icon' onClick={()=>handleDone(todoEl.id)}><MdDone></MdDone></span>

            ): (
            <span className='icon' onClick={()=>handleDone(todoEl.id)}><MdDone></MdDone></span>

            )

        }


        </div>
    </form>
  )
}





    export default TodoCard