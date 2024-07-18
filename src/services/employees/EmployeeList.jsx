import { useEffect, useState } from "react";
import { getStaffUser } from "../userService";
import { User } from "../../users/User";
import "./Employees.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUser().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => (
        <User user={employeeObj} key={employeeObj.id} />
      ))}
    </div>
  );
};
