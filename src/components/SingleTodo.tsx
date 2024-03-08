import React, { useState } from 'react'
import './styles.css'
import { Todo } from '../model'
import { MdOutlineDone } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import TodoList from './TodoList';

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo)));
    setEdit(false);
  }
  return (
    <div>
      <form onSubmit={(e) => handleEdit(e, todo.id)}>
        <div className='todos_card'>
          {edit ? (
            <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
          ) :
            (todo.isDone ?
              <s>
                {todo.todo}
              </s>
              :
              <span>
                {todo.todo}
              </span>
            )}
          <span className='todos_operator'>

            <span onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit)
              }
            }}><MdEdit /></span>
            <span onClick={() => handleDone(todo.id)}><MdOutlineDone /></span>
            <span onClick={() => handleDelete(todo.id)}><MdDelete /></span>
          </span>
        </div>
      </form>
    </div>
  )
}

export default SingleTodo
