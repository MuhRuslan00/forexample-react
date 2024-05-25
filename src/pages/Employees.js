import './../index.css'
import Employee from './../componenets/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './../componenets/AddEmployee';
import EditEmployee from './../componenets/EditEmployee';



function Employees() {
  const [role, setRole] = useState('boss');
  // 2 state updating datas 

    const [employees, setEmployees] = useState([
      { id: 1,
        name: 'Caleb', role: 'Intern', img: "https://img.freepik.com/free-photo/man-isolated-showing-emotions-end-gestures_1303-30095.jpg"

      },

      {
        id: 2,
        name: 'Abby', role: 'Boss', img: "https://img.freepik.com/free-photo/waist-up-shot-serious-unshaven-male-with-confident-expression-keeps-arms-folded-listens-necessary-information-attentively-wears-stylish-shirt-poses-against-white-wall-people-lifestyle_273609-16355.jpg"

      },

      {
        id: 3,
        name: 'Seridan', role: 'Junior', img: "https://img.freepik.com/free-photo/young-blonde-woman-blue-sweater_273609-19500.jpg"

      },

      {
        id: 4,
        name: 'Casha', role: 'Intern', img: "https://img.freepik.com/free-photo/creative-happy-attractive-fair-haired-blond-caucasian-female-sweater-glasses-having-interesting-awesome-idea-looking-upper-left-corner-daydreaming-smiling-satisfied-white-wall_176420-34856.jpg"

      },

      {
        id: 5,
        name: 'Senmundan', role: 'Metodology', img: "https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-6019.jpg"

      },

      {
        id: 6,
        name: 'Carin', role: 'Meneger', img: "https://img.freepik.com/free-photo/cute-intelligent-red-haired-female-student-round-spectacles-rejoices-successfully-passed-exam-foreign-languages_273609-3833.jpg"

      },

    ]);

    function updateEmployee(id, newName, newRole, newImg) {
      const updatedEmployees = employees.map((employee => {
        if (id == employee.id){
          // return new
          return {...employee, name: newName, role: newRole};
        }
        return employee
      }));
      setEmployees(updatedEmployees)
    }
    
    function newEmployee (name, role, img){
      const newEmployee = {
        id: uuidv4(),
        name: name,
        role: role,
        img: img,
      };
      setEmployees([...employees, newEmployee]);
    }

  const showEmployee = true;
  return (
    <div className="">
      
      {
      showEmployee ? (
    <>
    <input type='text' onChange={(e) => {
      // console.log(e.target.value);
      setRole(e.target.value); 
    }}/>
    <div className='flex flex-wrap justify-center'>
    {employees.map((empl) => {
      const editEmployee= <EditEmployee 
      id={empl.id}
      name={empl.name}
      role={empl.role}
      updateEmployee={updateEmployee}
      />
      
      return(
        <Employee 
        key={empl.id}
        id={empl.id}
        // key={uuidv4()}
        name={empl.name}
        role={empl.role}
        img={empl.img}
        editEmployee={editEmployee}
        />
      );
    })}


      {/* <Employee name='Caleb'
      role='Intern'
      img= "https://img.freepik.com/free-photo/young-blonde-woman-blue-sweater_273609-19500.jpg"
      />
      <Employee name='Abby'
      role={role} 
      img= "https://img.freepik.com/free-photo/young-blonde-woman-blue-sweater_273609-19500.jpg"/>
      <Employee name='Joe' img= "https://img.freepik.com/free-photo/young-blonde-woman-blue-sweater_273609-19500.jpg"
      />

      <Employee name='Caleb'
      role='Intern'
      img= "https://img.freepik.com/free-photo/young-blonde-woman-blue-sweater_273609-19500.jpg"
    />

      <Employee name='Abby'
      role={role}
      img= "https://img.freepik.com/free-photo/young-blonde-woman-blue-sweater_273609-19500.jpg"
      />
      <Employee name='Joe'
      img= "https://img.freepik.com/free-photo/young-blonde-woman-blue-sweater_273609-19500.jpg"
      /> */}
            </div>
            <AddEmployee newEmployee={newEmployee}/>
      </>
    ) : (
      <p>You can not see employee</p>
)}
    </div>
  );
}

export default Employees;
