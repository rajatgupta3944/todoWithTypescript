import React,{useRef} from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField : React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(todo)
  return (
        <form className='input' onSubmit={e => {handleAdd(e);inputRef.current?.focus()}}>
            <input ref={inputRef} type='input' placeholder='Enter a task' className='input__box' value={todo} onChange={(e) => setTodo(e.target.value)}></input>
            <button className='input__submit' type='submit'>Go</button>
        </form>
  )
}

export default InputField
