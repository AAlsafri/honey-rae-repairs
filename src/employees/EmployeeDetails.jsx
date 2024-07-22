import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeByUserId } from "../services/employeeService";
import { getTicketsByEmployeeId } from "../services/ticketService";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const [tickets, setTickets] = useState([]);
  const { employeeId } = useParams();

  useEffect(() => {
    getEmployeeByUserId(employeeId).then((data) => {
      const employeeObj = data[0];
      setEmployee(employeeObj);
    });
  }, [employeeId]);

  useEffect(() => {
    getTicketsByEmployeeId(employeeId).then((data) => {
      setTickets(data);
    });
  }, [employeeId]);

  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email : </span>
        {employee.user?.email}
      </div>
      <div>
        <span className="employee-info">Specialty : </span>
        {employee.specialty}
      </div>
      <div>
        <span className="employee-info">Rate</span>
        {employee.rate}
      </div>
      <div>
        <span className="employee-info">Currently working on : </span>
        {tickets.length > 0 ? tickets[0].id : "No tickets assigned"}
      </div>
    </section>
  );
};
