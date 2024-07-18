import "../App.css";
import { TicketList } from "./components/TicketsList";
import { CustomerList } from "./customers/CustomersList";
import { EmployeeList } from "./services/employees/EmployeeList";

export const App = () => {
  return (
    <>
      {/* <TicketList /> */}
      <CustomerList />
      <EmployeeList />
    </>
  );
};
