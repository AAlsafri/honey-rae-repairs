import "../App.css";
import { NavBar } from "./components/nav/NavBar";
import { TicketList } from "./components/TicketsList";
import { Welcome } from "./components/welcome/Welcome";
import { CustomerDetails } from "./customers/CustomerDetails";
import { EmployeeDetails } from "./employees/EmployeeDetails";
import { CustomerList } from "./customers/CustomersList";
import { EmployeeList } from "./employees/EmployeeList";
import { Routes, Route, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            {/* <Welcome /> */}
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="/tickets" element={<TicketList />} />
        <Route path="/employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route path="/customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
          {/* /customers/:customerId */}
        </Route>
      </Route>
    </Routes>
  );
};
