import React from "react"
import "./Components/Pagination"
import { useState,useEffect } from "react";
import ReactPaginate from "react-paginate"


                   
const Fetch = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users");
        const data = await response.json();
        setUser(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedUsers = user.slice(offset, offset + itemsPerPage);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error ...</div>;
  }

  return (
    <div className="height">
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((userData) => (
            <tr key={userData.id}>
              <td>{userData.email}</td>
              <td>{userData.first_name}</td>
              <td>{userData.last_name}</td>
              <td><img src={userData.avatar} alt={userData.first_name} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(user.length / itemsPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Fetch;
