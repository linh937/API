// function Navbar(){
   
//     return(
        
//         <main>
//         <header id="header" className="header fixed-top d-flex align-items-center">
//           <div className="d-flex align-items-center justify-content-between">
//             <a href="index.html" className="logo d-flex align-items-center">
//               <img src="/icon/smartwatch-app.png" alt="Logo" />
//               <span className="d-none d-lg-block text-uppercase">Watchtopia SHOP</span>
//             </a>
//             <i className="fa-solid fa-bars-staggered toggle-sidebar-btn" style={{ fontSize: '25px' }}></i>
//           </div>
//           <div className="search-bar">
//             <form className="search-form d-flex align-items-center">
//               <input type="text" name="query" placeholder="Tìm kiếm ..." />
//               <button type="submit" title="Search">
//                 <i className="fa-solid fa-magnifying-glass"></i>
//               </button>
//             </form>
//           </div>
//           <nav className="header-nav ms-auto">
//             <ul className="d-flex align-items-center">
//               <li className="nav-item dropdown">
//                 <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
//                   <i className="fa-regular fa-bell fa-beat" style={{ color: '#000000' }}></i>
//                   <span className="badge bg-primary badge-number">4</span>
//                 </a>
//                 <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
//                   <li className="dropdown-header">
//                     Thông báo đã nhận gần đây
//                     <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">Đánh dấu xem tất cả</span></a>
//                   </li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li className="notification-item">
//                     <img src="/img/w1.png" alt="" style={{ width: '50px', marginRight: '10px' }} />
//                     <div>
//                       <h4>Đơn hàng mới</h4>
//                       <p>
//                         tuong6969 đã đặt một đơn hàng COD 230708FA4PE5EY. Vui lòng không giao hàng cho đến khi Mã vận đơn được cập nhật trong chi tiết đơn hàng.
//                       </p>
//                       <p>Đơn hàng |10:20 09/07/2023</p>
//                     </div>
//                   </li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li className="dropdown-footer">
//                     <a href="#">Xem tất cả thông báo</a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item d-block d-lg-none">
//                 <a className="nav-link nav-icon search-bar-toggle" href="#">
//                   <i className="fa-solid fa-magnifying-glass"></i>
//                 </a>
//               </li>
//               <li className="nav-item dropdown pe-3">
//                 <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
//                   <img src="/icon/avatarNEW.png" alt="Profile" className="rounded-circle" />
//                   <span className="d-none d-md-block dropdown-toggle ps-2">Lucas</span>
//                 </a>
//                 <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
//                   <li className="dropdown-header">
//                     <h6>Lucas - Tung</h6>
//                     <span>Admin</span>
//                   </li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li><a className="dropdown-item d-flex align-items-center" href="">
//                     <i className="fa-solid fa-circle-user"></i>
//                     <span>Trang Cá Nhân</span>
//                   </a></li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li><a className="dropdown-item d-flex align-items-center" href="">
//                     <i className="fa-solid fa-user-gear"></i>
//                     <span>Cài Đặt</span>
//                   </a></li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li><a className="dropdown-item d-flex align-items-center" href="">
//                     <i className="fa-solid fa-circle-question"></i>
//                     <span>Cần Hỗ Trợ ?</span>
//                   </a></li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li><a className="dropdown-item d-flex align-items-center" href="/security/logoff">
//                     <i className="fa-solid fa-arrow-right-from-bracket"></i>
//                     <span>Đăng Xuất</span>
//                   </a></li>
//                 </ul>
//               </li>
//             </ul>
//           </nav>
//         </header>
  
//         <aside id="sidebar" className="sidebar">
//           <ul className="sidebar-nav" id="sidebar-nav">
//             <li className="nav-item">
//               <a className="nav-link" href="">
//                 <i className="fa-regular fa-clipboard"></i>
//                 <span>Thống Kê</span>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
//                 <i className="fa-solid fa-clock"></i><span>Sản Phẩm</span>
//                 <i className="fa-solid fa-caret-down ms-auto"></i>
//               </a>
//               <ul id="components-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
//                 <li><a href="/product/addproduct"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Thêm Sản Phẩm</span></a></li>
//                 <li><a href="/product/UpdateProduct"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Cập Nhật Sản Phẩm</span></a></li>
//                 <li><a href=""><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Nhập Kho Sản Phẩm</span></a></li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
//                 <i className="fa-solid fa-table-list"></i><span>Danh Sách</span>
//                 <i className="fa-solid fa-caret-down ms-auto"></i>
//               </a>
//               <ul id="tables-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
//                 <li><a href="/product/listproduct"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Danh Sách Sản Phẩm</span></a></li>
//                 <li><a href="/admin/inventory"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Danh Sách Kho</span></a></li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link collapsed" data-bs-target="#listUsers-nav" data-bs-toggle="collapse" href="#">
//                 <i className="fa-solid fa-users"></i><span>Người Dùng</span>
//                 <i className="fa-solid fa-caret-down ms-auto"></i>
//               </a>
//               <ul id="listUsers-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
//                 <li><a href="/admin/user"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Danh Sách Tài Khoản</span></a></li>
//                 <li><a href="/admin/history"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Lịch Sử Đănh Nhập</span></a></li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link collapsed" data-bs-target="#listOrder-nav" data-bs-toggle="collapse" href="#">
//                 <i className="fa-solid fa-users"></i><span>Quản Lý Đơn Hàng</span>
//                 <i className="fa-solid fa-caret-down ms-auto"></i>
//               </a>
//               <ul id="listOrder-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
//                 <li><a href="/admin/order"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Tất Cả</span></a></li>
//                 <li><a href="/admin/order"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Đơn Hàng Mới</span></a></li>
//                 <li><a href=""><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Đơn Hủy</span></a></li>
//                 <li><a href=""><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Trả Hàng/ Hoàn Tiền</span></a></li>
//               </ul>
//             </li>
//             <hr />
//             <li className="nav-item">
//               <a className="nav-link collapsed" href="#">
//                 <i className="fa-solid fa-circle-user"></i>
//                 <span>Trang Cá Nhân</span>
//               </a>
//             </li>
//           </ul>
//         </aside>
//       </main>
//     )
// }
// export default Navbar


import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <main>
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <img src="/icon/smartwatch-app.png" alt="Logo" />
            <span className="d-none d-lg-block text-uppercase">Watchtopia SHOP</span>
          </Link>
          <i className="fa-solid fa-bars-staggered toggle-sidebar-btn" style={{ fontSize: '25px' }}></i>
        </div>
        <div className="search-bar">
          <form className="search-form d-flex align-items-center">
            <input type="text" name="query" placeholder="Tìm kiếm ..." />
            <button type="submit" title="Search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown">
              <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="fa-regular fa-bell fa-beat" style={{ color: '#000000' }}></i>
                <span className="badge bg-primary badge-number">4</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  Thông báo đã nhận gần đây
                  <Link to="#"><span className="badge rounded-pill bg-primary p-2 ms-2">Đánh dấu xem tất cả</span></Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li className="notification-item">
                  <img src="/img/w1.png" alt="" style={{ width: '50px', marginRight: '10px' }} />
                  <div>
                    <h4>Đơn hàng mới</h4>
                    <p>
                      tuong6969 đã đặt một đơn hàng COD 230708FA4PE5EY. Vui lòng không giao hàng cho đến khi Mã vận đơn được cập nhật trong chi tiết đơn hàng.
                    </p>
                    <p>Đơn hàng |10:20 09/07/2023</p>
                  </div>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li className="dropdown-footer">
                  <Link to="#">Xem tất cả thông báo</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle" href="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
            <li className="nav-item dropdown pe-3">
              <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                <img src="/icon/avatarNEW.png" alt="Profile" className="rounded-circle" />
                <span className="d-none d-md-block dropdown-toggle ps-2">Lucas</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Lucas - Tung</h6>
                  <span>Admin</span>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item d-flex align-items-center" to="">
                  <i className="fa-solid fa-circle-user"></i>
                  <span>Trang Cá Nhân</span>
                </Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item d-flex align-items-center" to="">
                  <i className="fa-solid fa-user-gear"></i>
                  <span>Cài Đặt</span>
                </Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item d-flex align-items-center" to="">
                  <i className="fa-solid fa-circle-question"></i>
                  <span>Cần Hỗ Trợ ?</span>
                </Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item d-flex align-items-center" to="/security/logoff">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  <span>Đăng Xuất</span>
                </Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/admin/home2">
              <i className="fa-regular fa-clipboard"></i>
              <span>Thống Kê</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <i className="fa-solid fa-clock"></i><span>Sản Phẩm</span>
              <i className="fa-solid fa-caret-down ms-auto"></i>
            </a>
            <ul id="components-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li><Link to="/admin/addproduct"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Thêm Sản Phẩm</span></Link></li>
              <li><Link to="/admin/updateproduct"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Cập Nhật Sản Phẩm</span></Link></li>
              <li><Link to="/admin/inventory"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Nhập Kho Sản Phẩm</span></Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
              <i className="fa-solid fa-table-list"></i><span>Danh Sách</span>
              <i className="fa-solid fa-caret-down ms-auto"></i>
            </a>
            <ul id="tables-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li><Link to="/admin/listproduct"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Danh Sách Sản Phẩm</span></Link></li>
              <li><Link to="/admin/inventory"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Danh Sách Kho</span></Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#listUsers-nav" data-bs-toggle="collapse" href="#">
              <i className="fa-solid fa-users"></i><span>Người Dùng</span>
              <i className="fa-solid fa-caret-down ms-auto"></i>
            </a>
            <ul id="listUsers-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li><Link to="/admin/listuser"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Danh Sách Tài Khoản</span></Link></li>
              <li><Link to="/admin/loginhistory"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Lịch Sử Đănh Nhập</span></Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#listOrder-nav" data-bs-toggle="collapse" href="#">
              <i className="fa-solid fa-users"></i><span>Quản Lý Đơn Hàng</span>
              <i className="fa-solid fa-caret-down ms-auto"></i>
            </a>
            <ul id="listOrder-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li><Link to="/admin/order"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Tất Cả</span></Link></li>
              <li><Link to="/admin/order"><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Đơn Hàng Mới</span></Link></li>
              <li><Link to=""><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Đơn Hủy</span></Link></li>
              <li><Link to=""><i className="fa-solid fa-caret-right" style={{ fontSize: '15px' }}></i><span>Trả Hàng/ Hoàn Tiền</span></Link></li>
            </ul>
          </li>
          <hr />
          <li className="nav-item">
            <Link className="nav-link collapsed" to="#">
              <i className="fa-solid fa-circle-user"></i>
              <span>Trang Cá Nhân</span>
            </Link>
          </li>
        </ul>
      </aside>
    </main>
  );
}

export default Navbar;
