import { Toaster } from 'react-hot-toast';
import Signup from './components/Signup';
import Course from './courses/Courses';
import Home from './home/Home';
import {  Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthProvider';

function App() {
  const[authUser,setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={ authUser ? <Course /> : <Navigate to="/signup" />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
