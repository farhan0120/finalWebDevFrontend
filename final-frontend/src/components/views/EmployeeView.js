import { Link } from "react-router-dom";
import { AddButton, BackButton, FormButton, NormButton, PlusButton, SmallButton, TaskLink, XButton } from "../buttons";


const EmployeeView = (props) => {
  const {employee, editTask, allTasks} = props;
  let assignedTasks = allTasks.filter(task => task.employeeId===employee.id);
  let availableTasks = allTasks.filter(task => task.employeeId!==employee.id);
  
  return (
    <div>      
      <br/><br/>
      <br/><br/>
      <div className="inactive_name">{employee.firstname} {employee.lastname} (id: {employee.id})</div> 
      <br/><br/>
      <div className="department">Department: {employee.department}</div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div>Assigned tasks:
        {assignedTasks.map( task => {
          return (
            <div key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h4>{task.description}</h4>
            </Link>
            <button onClick={() => editTask({id:task.id, employeeId: null})}>x</button>
            </div>
          );
        })}</div>
        <div>Available tasks:
        {availableTasks.map( task => {
          return (
            <div key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h4>{task.description}</h4>
            </Link>
            <button onClick={() => editTask({id:task.id, employeeId: employee.id})}>+</button>
            </div>
          );
        })}</div>
      </div>
      <BackButton to={`/employees`}>
        Back
      </BackButton>
      <SmallButton to={`/editemployee/${employee.id}`}>Edit employee information</SmallButton>
    </div>
    
  );

};

export default EmployeeView;