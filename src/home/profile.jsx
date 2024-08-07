function Profile() {
    
   
      
          
    return(
        <div className="cover">
        <header id="header">
            <div className="d-flex flex-column">
                <div className="profile">
                    <img
                        src="/icon/avatarNEW.png"
                        alt="Profile"
                        className="img-fluid rounded-circle"
                    />
                    <h1 className="text-light">
                        <a href="#">Lucas</a>
                    </h1>
                    <div className="social-links mt-3 text-center">
                        <a href="https://tungle04.bio.link/" className="twitter">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#" className="facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" className="instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" className="google-plus">
                            <i className="fa-brands fa-tiktok"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCJBe9YBO5qVgwlmkDyN9q6A"
                            className="linkedin"
                        >
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li>
                            <a href="/home/index" className="nav-link scrollto">
                                <i className="fa-solid fa-house" style={{ color: '#ffffff' }}></i>
                                <span>Trang chủ</span>
                            </a>
                        </li>
                        <li>
                            <a href="#updateProfile" className="nav-link scrollto">
                                <i className="fa-solid fa-pen-to-square text-white"></i>
                                <span>Cập Nhật Thông Tin Cá Nhân</span>
                            </a>
                        </li>
                        <li>
                            <a href="#passwordUpdate" className="nav-link scrollto">
                                <i className="fa-solid fa-passport text-white"></i>
                                <span>Đổi Mật Khẩu</span>
                            </a>
                        </li>
                        <li>
                            <a href="/account/logoff" className="nav-link scrollto">
                                <i className="fa-solid fa-arrow-right-from-bracket text-white"></i>
                                <span>Đăng Xuất</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <main id="main">
            <section id="updateProfile" className="updateProfile">
                <div className="container">
                    <h3>
                        <i className="fa-solid fa-grip-lines-vertical"></i> Cập Nhật Thông Tin Cá Nhân
                    </h3>
                    <form action="/account/changeprofile" method="post" onSubmit={handleProfileUpdate} className="container-update-profile">
                        <div className="row">
                            <div className="col-sm-4">
                                <img
                                    src="/icon/avatarNEW.png"
                                    className="img-thumbnail"
                                    alt="Profile"
                                    style={{ width: '70%', padding: '10px', border: 'none' }}
                                />
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    <div className="col">
                                        <label>Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            placeholder="Username"
                                            defaultValue={profile.username}
                                        />
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: '20px', marginBottom: '20px' }}>
                                    <div className="col">
                                        <label>Họ và tên</label>
                                        <input
                                            type="text"
                                            name="fullname"
                                            className="form-control"
                                            placeholder="Họ và tên"
                                            defaultValue={profile.fullname}
                                        />
                                    </div>
                                    <div className="col">
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control"
                                            placeholder="abc@gmail.com"
                                            defaultValue={profile.email}
                                        />
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: '20px', marginBottom: '20px' }}>
                                    <div className="col">
                                        <label>Số điện thoại</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control"
                                            placeholder="XXXXXXXXXX"
                                            defaultValue={profile.phone}
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-secondary btn-update">Cập nhật</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <section id="passwordUpdate">
                <div className="container">
                    <h3>
                        <i className="fa-solid fa-grip-lines-vertical"></i> Đổi Mật Khẩu
                    </h3>
                    <form action="/account/changePassProfile" method="post" onSubmit={handlePasswordUpdate} className="container-update-profile" style={{ marginBottom: '120px' }}>
                        <strong>Đổi Mật Khẩu</strong>
                        <br />
                        <p>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu với bất kỳ ai.</p>
                        <hr />
                        <div className="row mb-3">
                            <label htmlFor="oldPassword" className="col-sm-2 col-form-label">Mật khẩu cũ</label>
                            <div className="col-sm-10">
                                <input
                                    type="password"
                                    name="passwords"
                                    className="form-control"
                                    id="oldPassword"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="newPassword" className="col-sm-2 col-form-label">Mật khẩu mới</label>
                            <div className="col-sm-10">
                                <input
                                    type="password"
                                    name="passwordsNew"
                                    className="form-control"
                                    id="newPassword"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="confirmNewPassword" className="col-sm-2 col-form-label">Nhập lại mật khẩu mới</label>
                            <div className="col-sm-10">
                                <input
                                    type="password"
                                    name="passwordsNew2"
                                    className="form-control"
                                    id="confirmNewPassword"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="confirm" className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-outline-secondary">Xác nhận</button>
                            </div>
                        </div>
                        <hr />
                        <a href="#" className="text-center" style={{ textDecoration: 'none', color: 'rgb(103, 103, 103)' }}>
                            Bạn quên mật khẩu?
                        </a>
                        <div>
                            {successPass && <div className="alert alert-success" role="alert">Cập nhật thành công!</div>}
                            {errorPass && <div className="alert alert-danger" role="alert">Kiểm tra lại mật khẩu!</div>}
                        </div>
                    </form>
                </div>
                <hr style={{ color: 'orange', height: '5px', backgroundColor: 'orange' }} />
            </section>
        </main>
        <div className="backTop">
            {showButton && (
                <button
                    onClick={scrollToTop}
                    id="totop"
                    title="Go to top"
                    className="btn btn-primary"
                >
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
            )}
        </div>
    </div>
    
    )
}
export default Profile