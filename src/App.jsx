import "../App.css";
import { TicketList } from "./components/TicketsList";
import { CustomerList } from "./customers/CustomersList";

export const App = () => {
  return (
    <>
      {/* <TicketList /> */}
      <CustomerList />
    </>
  );
};
