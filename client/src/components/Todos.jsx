import { useContext, useEffect } from 'react'
import Todo from './Todo'
import { getAllTodos } from '../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../context/AuthProvider'
import Tabs from './Tabs'
import { ACTIVE_TODOS, ALL_TODOS, DONE_TODOS } from '../redux/actions/constants'

const Todos = () => {

    const dispatch = useDispatch()
    const { auth } = useContext(AuthContext)
    const todos = useSelector(state => state.todos)
    const currentTab = useSelector(state => state.currentTab)
    useEffect(() => {
        auth && dispatch(getAllTodos())
        // eslint-disable-next-line
    }, [auth])

    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos
        } else if (currentTab === ACTIVE_TODOS) {
            return todos.filter(todo => !todo.done)
        } else if (currentTab === DONE_TODOS) {
            return todos.filter(todo => todo.done)
        }
    }

    // const removeDoneTodos = () => {
    //     todos.forEach(({ done, _id }) => {
    //         if (done) {
    //             dispatch(deleteTodo(_id))
    //         }
    //     });
    // }

    return (
        <div>
            <article>
                <div>
                    <Tabs currentTab={currentTab} />
                    {/* {
                        todos.some(todo => todo.done) ? (
                            <button className='button clear' onClick={() => removeDoneTodos()} >Remove All Todos</button>
                        ) : null
                    } */}
                </div>
                <div className="todos">
                    {
                        getTodos()?.map((todo) => {
                            return <Todo key={todo._id} todo={todo} />
                        })
                    }
                </div>
            </article>
        </div>
    )
}

export default Todos
