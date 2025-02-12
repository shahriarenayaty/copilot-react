import React, { useState } from "react";
import Pagination from "../components/Pagination";
const employees = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Jane", lastName: "Smith" },
  { id: 3, firstName: "Alice", lastName: "Johnson" },
  { id: 4, firstName: "Bob", lastName: "Brown" },
  { id: 5, firstName: "Charlie", lastName: "Davis" },
  { id: 6, firstName: "David", lastName: "Wilson" },
  { id: 7, firstName: "Eve", lastName: "Clark" },
  { id: 8, firstName: "Frank", lastName: "Lewis" },
  { id: 9, firstName: "Grace", lastName: "Walker" },
  { id: 10, firstName: "Hank", lastName: "Hall" },
  { id: 11, firstName: "Ivy", lastName: "Allen" },
  { id: 12, firstName: "Jack", lastName: "Young" },
  { id: 13, firstName: "Karen", lastName: "Hernandez" },
  { id: 14, firstName: "Leo", lastName: "King" },
  { id: 15, firstName: "Mia", lastName: "Wright" },
  { id: 16, firstName: "Nina", lastName: "Lopez" },
  { id: 17, firstName: "Oscar", lastName: "Hill" },
  { id: 18, firstName: "Paul", lastName: "Scott" },
  { id: 19, firstName: "Quinn", lastName: "Green" },
  { id: 20, firstName: "Rachel", lastName: "Adams" },
  { id: 21, firstName: "Sam", lastName: "Baker" },
  { id: 22, firstName: "Tina", lastName: "Gonzalez" },
  { id: 23, firstName: "Uma", lastName: "Nelson" },
  { id: 24, firstName: "Victor", lastName: "Carter" },
  { id: 25, firstName: "Wendy", lastName: "Mitchell" },
  { id: 26, firstName: "Xander", lastName: "Perez" },
  { id: 27, firstName: "Yara", lastName: "Roberts" },
  { id: 28, firstName: "Zane", lastName: "Turner" },
  { id: 29, firstName: "Amy", lastName: "Phillips" },
  { id: 30, firstName: "Brian", lastName: "Campbell" },
];

export default function Employees() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indices for slicing the employees array
  const indexLast = currentPage * itemsPerPage;
  const indexFirst = indexLast - itemsPerPage;
  const currentEmployees = employees.slice(indexFirst, indexLast);

  return (
    <div>
      <h1>Employees</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        initialPage={currentPage}
        totalPages={Math.ceil(employees.length / 5)}
        onPageChange={(page) => {
          console.log(page);
          setCurrentPage(page);
        }}
      />
    </div>
  );
}
