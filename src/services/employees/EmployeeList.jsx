import { useEffect, useState } from "react";
import { getStaffUser } from "../userService";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUser().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  return;
  <div className="">
    {employees.map((employeeObj) => {
      return <User user={employeeObj} />;
    })}
  </div>;
};
