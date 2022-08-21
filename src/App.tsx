import React, {useState} from 'react'
import InputField from './components/InputField/InputField'
import "./App.css"
import { Todo } from './Model'
import TodoList from './components/List/TodoList'
const App: React.FC = () => {
  
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  

  const handleAdd = (event: React.FormEvent<EventTarget>)=>{
    event.preventDefault();

    if(todo){
    setTodos([...todos, {id:Date.now(), todo:todo, isDone: false} ])
    setTodo("")
    } 
  }
  
  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputField>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  )
}

export default App
