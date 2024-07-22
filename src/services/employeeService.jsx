export const getAllEmployees = () => {
  return fetch(`http://localhost:8088/employees?_expand=user`).then((res) =>
    res.json()
  );
};

export const getEmployeeByUserId = () => {
  return fetch(`http://localhost:8088/employees?userId=5&_expand=user`).then(
    (res) => res.json()
  );
};
