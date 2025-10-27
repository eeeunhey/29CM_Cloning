import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'

function App() {
// 어느 페이지가도 반영해버림 그니깐 Navbar 넣으면 딱일듯.. 
  return (<div>
    <Navbar />
    <Outlet />
  </div>

  )
}

export default App
