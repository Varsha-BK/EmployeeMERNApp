import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import EmpEdit from './Components/EmpEdit';
import Employee from './Components/Employee';
import EmployeeForm from './Components/EmployeeForm';
import Login from './Components/Login';
import ViewEmployees from './Components/ViewEmployees';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/employeeform' exact element={<EmployeeForm/>}/>
      <Route path='/employee' exact element={<Employee/>} />
      <Route path='/' exact element={<Login/>}/>
      <Route path='/viewemployees' exact element={<ViewEmployees/>}/>
      <Route path='/update/:id' exact element={<EmpEdit/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
