import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let circleCommonClasses = 'h-2.5 w-2.5 bg-current rounded-full';

  return (
    <div className='flex'>
    <div className={`${circleCommonClasses} mr-1 animate-pulse`}></div>
    <div className={`${circleCommonClasses} mr-1 animate-bounce200 lg:animate-spin`}></div>
    <div className={`${circleCommonClasses} animate-bounce400`}></div>
</div>
  )
}

export default App
