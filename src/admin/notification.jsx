import Navbar from "./navbar";
import React, { useState, useEffect } from 'react';
function Notification(){
    const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Hàm giả lập để lấy dữ liệu thông báo từ API hoặc dữ liệu tĩnh
    const fetchNotifications = async () => {
      try {
        // Ví dụ: const response = await fetch('/api/notifications');
        // const data = await response.json();
        // setNotifications(data);
        // Dữ liệu giả lập
        const data = [
          {
            id: 1,
            title: 'Đơn hàng mới',
            message: 'tuong6969 đã đặt một đơn hàng COD 230708FA4PE5EY. Vui lòng không giao hàng cho đến khi Mã vận đơn được cập nhật trong chi tiết đơn hàng.',
            date: '10:20 09/07/2023',
            img: '/img/w1.png',
          },
          {
            id: 2,
            title: 'Đơn hàng mới',
            message: 'tuong6969 đã đặt một đơn hàng COD 230708FA4PE5EY. Vui lòng không giao hàng cho đến khi Mã vận đơn được cập nhật trong chi tiết đơn hàng.',
            date: '10:20 09/07/2023',
            img: '/img/w1.png',
          }
        ];
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications', error);
      }
    };

    fetchNotifications();
  }, []);

    return(
      <>
      <Navbar/>
        <main id="main" className="main">
        <div className="pagetitle">
          <h1>Thông Báo</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/Statistics.html">Trang chủ</a></li>
              <li className="breadcrumb-item active">Tất cả thông báo</li>
            </ol>
          </nav>
        </div>
        <section className="section dashboard">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header bg-white">
                  Tất cả thông báo 
                  <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">Đánh dấu xem tất cả</span></a>
                </div>
                <div className="card-body">
                  <nav className="header-nav ms-auto">
                    <ul className="">
                      {notifications.map((notification) => (
                        <div className="each" key={notification.id}>
                          <li className="notification-item d-lg-flex">
                            <img src={notification.img} alt="" style={{ width: '100px', marginRight: '15px' }} />
                            <div>
                              <h4>{notification.title}</h4>
                              <p>{notification.message}</p>
                              <p>{notification.date}</p>
                            </div>
                          </li>
                          <li>
                            <hr />
                          </li>
                        </div>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      </>
    )
}
export default Notification