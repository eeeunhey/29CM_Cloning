
import './App.css'
import Navbar from './component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';


function App() {

  return (<div>
    <Navbar />
    <Outlet  />
  </div>

  )
}

export default App
