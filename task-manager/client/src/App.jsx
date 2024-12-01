import { useState } from 'react'
import Login from './pages/Login'
import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom'
import Dashboard from "./pages/Dashboard.jsx"
import Tasks from "./pages/Tasks.jsx"
import Users from "./pages/Users.jsx"
import Trash from "./pages/Trash.jsx"
import TaskDetails from "./pages/TaskDetails.jsx"
import { Toaster } from 'sonner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='w-full min-h-screen bg-[#f3f4f6]' >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/tasks' element={<Tasks/>} />
          <Route path='/completed/:status' element={<Tasks/>} />
          <Route path='/in-progress/:status' element={<Tasks/>} />
          <Route path='/todo/:status' element={<Tasks/>} />
          <Route path='/team' element={<Users/>} />
          <Route path='/trashed' element={<Trash/>} />
          <Route path='/task/id' element={<TaskDetails/>} />
        </Route>

        <Route path='/log-in' element={<Login/>} />

        <Toaster richColors />
      </Routes>
    </main>
  )
}

export default App
