import './App.css'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import { Router, Route } from 'react-router-dom'


function App() {

  return (
    <>
   <div className='main-div'>
     <div className="left-sidebar">
      <Navbar />
        <h4>Hello</h4>
        <div className="links-div">
          <div>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Skills</h3>
            <h3>Projects</h3>
            <h3>Contact </h3>

          </div>
        </div>
     </div>
     <div className="right-sidebar">
      <Home />

     </div>

   </div>
     
    </>
  )
}

export default App
