import Create from './components/Create/Create';
import Employee from './components/Employee/Employee';
import {BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import { Button} from 'semantic-ui-react'
import image from "./backgroundimg.jpg"
import './App.css';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Update from './components/Update/Update';

function App() {

  return (
    <>
      <div className='main' style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
    height:700,width:1500}}>
            <div>
              <h2>Dashboard</h2>
            </div>
            <div className='bttn'> 
            <BrowserRouter>

            <Link to='/'>
              <Button color='blue'>Home</Button>
            </Link>
            {/* <Link to='/Create'>
              <Button color='blue'>Create</Button>
            </Link>
            <Link to='/Employee'>
              <Button color='blue'>Employee</Button>
            </Link>
            <Link to='/Admin'>
              <Button color='blue'>Admin</Button>
            </Link>
            <Link to='/Update'>
              <Button color='blue'>Update</Button>
            </Link> */}
                     
            <Routes>
              <Route path='/Create' element={<Create />} />
              <Route path='/' element={<Login />} />
              <Route path='/Employee' element={<Employee />} />
              <Route path='/Admin' element={<Admin />} />
              <Route path='/Update' element={<Update />} />
          
            </Routes>
            </BrowserRouter> 

      </div>
      </div>
      </>
  );
}

export default App;
