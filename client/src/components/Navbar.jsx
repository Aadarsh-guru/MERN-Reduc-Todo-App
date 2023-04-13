import React, { useContext } from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import { toast } from 'react-hot-toast'

const Navbar = () => {

    const { auth, setAuth, setAccount, account } = useContext(AuthContext)

    const handleLogout = () => {
        setAuth('')
        setAccount({})
        localStorage.removeItem('token')
        localStorage.removeItem('account')
        toast.success('User Logout successfully')
    }

    return (
        <AppBar position='static' color='transparent' >
            <Toolbar>
                <Box>
                    <Link style={{ textDecoration: 'none' }} to={'/'} ><Typography variant='h6' style={{ color: '#2a292b', fontWeight: 'bold' }} >Todo-Redux</Typography></Link>
                </Box>
                {/* <Box className='profile' style={{
                    margin: '0px auto', display: 'flex'
                }}>
                    <img src={account?.profile ? `/api/v1/auth/profile/${account?.profile}` : ''} alt="profile-pic" style={{ width: 50, height: 50, borderRadius: '50%' }} />
                    <Typography style={{ fontSize: 20, fontWeight: 600, textTransform: 'capitalize', margin: ' 10px 20px' }}>{account?.username}</Typography>
                </Box> */}
                <Box style={{ marginLeft: 'auto' }} >
                    {
                        auth ?
                            <Box style={{ display: 'flex' }} >
                                <img src={account?.profile ? `/api/v1/auth/profile/${account?.profile}` : ''} alt="profile-pic" style={{ width: 50, height: 50, borderRadius: '50%' }} />
                                <NavLink className='nav-link' to={'/login'} onClick={() => handleLogout()} >Logout</NavLink>
                            </Box>
                            :
                            <>
                                <NavLink className='nav-link' to={'/login'} >Login</NavLink>
                                <NavLink className='nav-link' to={'/register'}>SignUp</NavLink>
                            </>
                    }
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar