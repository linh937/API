import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const isLoggedIn = false; // Thay đổi điều kiện này dựa trên trạng thái đăng nhập thực tế của bạn

  return (
    <header className="header_section">
      <div className="container-fluid">
        <div className="row no-gutters" style={{ height: '15px' }}>
          <div className="col-12 col-sm-6 col-md-8" style={{ marginTop: '-20px' }}>
            <ul className="nav nav-top">
              {!isLoggedIn ? (
                <>
                  <li className="nav-item nav_item">
                    <Link className="nav-link nav_link active" to="/login" style={{ color: 'rgb(0, 0, 0)' }}>
                      Đăng nhập
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register" style={{ color: 'rgb(0, 0, 0)' }}>
                      Đăng ký
                    </Link>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
          <div className="col-6 col-md-4" style={{ marginTop: '-20px' }}>
            <ul className="nav" style={{ float: 'right' }}>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link" style={{ color: 'rgb(0, 0, 0)' }}>
                  Ngôn ngữ
                </a>
                <div className="dropdown-content">
                  <a className="dropdown-item" href="#">
                    Việt Nam
                  </a>
                  <a className="dropdown-item" href="?lang=global">
                    English
                  </a>
                  <a className="dropdown-item" href="#">
                    中国
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'rgb(0, 0, 0)' }}>
                  <i className="fa-solid fa-question"></i> Giúp đỡ ?
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand text-uppercase" to="/" style={{ marginLeft: '15px' }}>
            <span> Watchtopia SHOP </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Trang Chủ <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/watches">
                  Đồng Hồ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Giới Thiệu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Liên Hệ
                </Link>
              </li>
            </ul>
            <div className="user_option-box">
              <div className="container">
                <input placeholder="Nhập tên đồng hồ ..." required className="input" name="text" type="text" />
                <Link to="#" className="icon">
                  <i className="fa-brands fa-searchengin"></i>
                </Link>
              </div>
              <div className="dropdown">
                <Link to="#" className="dropbtn">
                  <i className="fa fa-user" aria-hidden="true" style={{ fontSize: '30px' }}></i>
                </Link>
                <div className="dropdown-content dropdowncontent">
                  <Link to="/user/profile">Trang cá nhân</Link>
                  <Link to="/order">Đơn mua</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/login">Đăng xuất</Link>
                </div>
              </div>
              <Link to="/cart" className="shopping">
                <i className="fa fa-cart-plus" aria-hidden="true" style={{ fontSize: '25px' }}></i>
                <span className="quantity">{/* Add logic to display cart count */}</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
