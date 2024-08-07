import Navbar from "./navbar";
import React, { useState, useEffect } from 'react';

function Listuser(){
    const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users'); // Thay thế với URL API thực tế của bạn
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });
      setUsers(users.filter(user => user.users_id !== userId));
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };
    return(
      <>
      <Navbar/>
<main id="main" className="main">
      <div className="pagetitle">
        <h1>Danh Sách Người Dùng</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/Statistics.html">Trang Chủ</a></li>
            <li className="breadcrumb-item"><a href="/Statistics.html">Sản Phẩm</a></li>
            <li className="breadcrumb-item active">Danh Sách Người Dùng</li>
          </ol>
        </nav>
      </div>
      <section className="section dashboard">
        <table className="table table-striped table-dark">
          <thead className="table-light">
            <tr>
              <th scope="col">Mã</th>
              <th scope="col">Họ Và Tên</th>
              <th scope="col">Mật Khẩu</th>
              <th scope="col">Email</th>
              <th scope="col">Số Điện Thoại</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.users_id}>
                <th>{user.users_id}</th>
                <td>{user.fullname}</td>
                <td>{user.passwords}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button 
                    className="btn btn-danger" 
                    onClick={() => handleDelete(user.users_id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
    </>
    )
}
export default Listuser