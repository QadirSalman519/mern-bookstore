import { Toaster } from 'react-hot-toast';
import Signup from './components/Signup';
import Course from './courses/Courses';
import Home from './home/Home';
import {  Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={<Course />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
