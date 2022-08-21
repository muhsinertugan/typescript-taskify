import React, { useRef } from 'react'
import "./styles.css"




interface PropsInterface{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string >>;
  handleAdd: (event: React.FormEvent<EventTarget>) => void
}

const InputField :React.FC<PropsInterface> = ({todo, setTodo, handleAdd}: PropsInterface) => {

  const inputRef = useRef<HTMLInputElement>(null)


  return (
    
      <form className='input' onSubmit={(event)=>{handleAdd(event)
      inputRef.current?.blur()
      }}>
        <input 
        ref={inputRef}
        type="input" 
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        placeholder='Enter a Task' className='input-box'></input>
        <button type='submit' className='input-submit'>Go</button>
      </form>

  )
}

export default InputField