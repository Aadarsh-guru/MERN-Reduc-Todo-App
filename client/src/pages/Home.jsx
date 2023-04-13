import { Box } from "@mui/material"
import TodoForm from "../components/TodoForm"
import Todos from "../components/Todos"


const Home = () => {

    return (
        <Box className='container' >
            <TodoForm />
            <Todos />
        </Box>
    )
}

export default Home