import { useEffect, useState } from "react";
import { getNonStaffUser } from "../services/userService";
import { User } from "../users/User";
import "./Customers.css";
import { Link } from "react-router-dom";

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
        <Link to={`/customers/${customerObj.id}`}>
          <User user={customerObj} key={customerObj.id} />
        </Link>
      ))}
    </div>
  );
};
