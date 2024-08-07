import Navbar from "./navbar";
import React, { useState, useEffect } from 'react';
function Loginhistory(){
    const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch('/api/login-history'); // Thay thế với URL API thực tế của bạn
        const data = await response.json();
        setLogs(data);
      } catch (error) {
        console.error('Error fetching login history', error);
      }
    };

    fetchLogs();
  }, []);

  const handleDelete = async (logId) => {
    try {
      await fetch(`/api/login-history/${logId}`, {
        method: 'DELETE',
      });
      setLogs(logs.filter(log => log.log_id !== logId));
    } catch (error) {
      console.error('Error deleting log', error);
    }
  };
    return(
      <>
      <Navbar/>
        <main id="main" className="main">
        <div className="pagetitle">
          <h1>Lịch Sử Đăng Nhập</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/Statistics.html">Trang Chủ</a></li>
              <li className="breadcrumb-item"><a href="/Statistics.html">Sản Phẩm</a></li>
              <li className="breadcrumb-item active">Lịch Sử Đăng Nhập</li>
            </ol>
          </nav>
        </div>
        <section className="section dashboard">
          <table className="table table-striped table-dark">
            <thead className="table-light">
              <tr>
                <th scope="col">Họ Và Tên</th>
                <th scope="col">Email</th>
                <th scope="col">Thời Gian Đăng Nhập</th>
                <th scope="col">Thời Gian Đăng Xuất</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {logs.map(log => (
                <tr key={log.log_id}>
                  <td>{log.user.fullname}</td>
                  <td>{log.user.email}</td>
                  <td>{log.login_time}</td>
                  <td>{log.login_out}</td>
                  <td>
                    <button 
                      className="btn btn-danger" 
                      onClick={() => handleDelete(log.log_id)}
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
export default Loginhistory