import { useContext, useState } from "react"
import { addNewTodo } from "../redux/actions/actions"
import { useDispatch } from 'react-redux'
import { AuthContext } from '../context/AuthProvider'
import { toast } from 'react-hot-toast'



const TodoForm = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const { account } = useContext(AuthContext)

    const onFormSubmit = async (e) => {
        e.preventDefault()
        dispatch(addNewTodo(text))
        setText('')
        toast.success('Todo Added Successfully')
    }

    return (
        <>
            <div>
                <div className="heading" style={{ marginBottom: 50, textAlign: 'center' }}>
                    <h3><b>{account?.username}'s Todo</b></h3>
                </div>
                <form onSubmit={onFormSubmit}>
                    <input style={{ fontSize: 20, fontWeight: 600, textAlign: 'center', padding: 10 }} type="text" value={text} placeholder='Enter new Todo' className='input' onChange={(e) => setText(e.target.value)} />
                </form>
            </div>
        </>
    )
}

export default TodoForm