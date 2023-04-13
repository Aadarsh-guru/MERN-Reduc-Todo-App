import { useState } from "react"
import { deleteTodo, toggleTodo, updateTodo } from "../redux/actions/actions"
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'

const Todo = ({ todo }) => {

    const dispatch = useDispatch()
    const [editing, setEditing] = useState(false)
    const [text, setText] = useState(todo.todo)

    const handleUpdate = (e) => {
        e.preventDefault()
        setEditing(!editing)
        dispatch(updateTodo(todo?._id, text))
        toast.success('Todo Updated Successfully')
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo?._id))
        toast.success('Todo Deleted Successfully')
    }

    return (
        <>
            <h4 className='task' onClick={() => dispatch(toggleTodo(todo._id))} style={{ textDecoration: todo.done ? 'line-through' : '', color: todo.done ? '#bdc3c7' : '#34495e' }} >
                <span style={{ display: editing ? 'none' : '' }}  >{todo.todo}</span>
                <form style={{ display: editing ? 'inline' : 'none' }} onSubmit={(e) => handleUpdate(e)} >
                    <input type="text" className="edit-todo" value={text} onChange={(e) => setText(e.target.value)} />
                </form>
                <span>
                    <i className="bi bi-trash3-fill icon" onClick={() => handleDelete()} ></i>
                </span>
                <span>
                    <i className="bi bi-pen icon" onClick={() => setEditing(!editing)} ></i>
                </span>
            </h4>
        </>
    )
}

export default Todo