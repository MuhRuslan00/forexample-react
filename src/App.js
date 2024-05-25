import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Employee from './componenets/Employee';
// import { useState } from 'react';
// import {v4 as uuidv4} from 'uuid';
// import AddEmployee from './componenets/AddEmployee';
// import EditEmployee from './componenets/EditEmployee';
import Header from './componenets/Header';
import Employees from './pages/Employees';
function App() {
    return (
    <div className="App">
      <BrowserRouter>
      <Header>
      <Routes>
        <Route path='/' element={<Employees />} />
        </Routes> 
      
      </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
