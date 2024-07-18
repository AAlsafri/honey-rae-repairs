import { useEffect, useState } from "react";
import { getNonStaffUser } from "../services/userService";
import { User } from "../users/User";
import "./Customer.css";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUser().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObj) => (
        <User user={customerObj} key={customerObj.id} />
      ))}
    </div>
  );
};
