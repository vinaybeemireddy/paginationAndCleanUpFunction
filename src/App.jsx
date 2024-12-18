import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './component/Posts'
import Timer from './component/Timer'
import PostsDemo from './component/PostsDemo'

function App() {
  const [showTimer, setShowTimer]=useState(true);


  return (
    <>
    <PostsDemo/>
{/* <Posts/> */}
{/* {showTimer && <Timer/>} */}
<button onClick={()=>setShowTimer(!showTimer)}>{showTimer ? "Hide counter": "show counter"}</button>

    </>
  )
}

export default App
