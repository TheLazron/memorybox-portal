import { useState } from 'react'
import { TextField } from '@mui/material'
import Login from './pages/Login'
import VideoBg from './assets/video.mp4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <video src={ VideoBg } autoPlay loop muted className='flex w-screen h-screen object-cover absolute'/>
    <div className='flex relative p-40 gap-20'>
        <Login/>
    </div>

    </div>
  )
}

export default App
