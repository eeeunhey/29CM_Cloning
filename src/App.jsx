import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (<div>
    <Navbar />
    <Outlet />
  </div>

  )
}

export default App
