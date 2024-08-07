function Register(){
//     const [successRegister, setSuccessRegister] = useState(false);
//   const [errorUsername, setErrorUsername] = useState(false);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     // For demonstration, we're setting the states manually
//     // setSuccessRegister(true);
//     // setErrorUsername(true);
//   };
return(
    <main>
    <div className="container_banner">
      <form className="form_container" action="/account/registers" method="post" >
        <div className="logo_container"></div>
        <div className="title_container">
          <p className="title">Đăng Ký</p>
          <span className="subtitle">Bắt đầu với ứng dụng của chúng tôi, chỉ cần tạo một tài khoản và tận hưởng trải nghiệm mua sắm.</span>
        </div>
        <br />
        <div className="input_container">
          <label className="input_label" htmlFor="fullname_field">Fullname</label>
          <input placeholder="Fullname" name="fullname" className="input_field_two" id="fullname_field" required />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="username_field">Username</label>
          <input placeholder="Username" name="username" className="input_field_two" id="username_field" required />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="email_field">Email</label>
          <input placeholder="name@mail.com" name="email" type="email" className="input_field_two" id="email_field" required />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="password_field">Mật Khẩu</label>
          <input placeholder="Password" name="passwords" type="password" className="input_field_two" id="password_field" required />
        </div>
        <button type="submit" className="sign-in_btn">
          <span>Đăng Ký</span>
        </button>
        {/* <div className="input_container">
          {successRegister && <div className="alert alert-success" role="alert">Đăng ký tài khoản thành công!</div>}
          {errorUsername && <div className="alert alert-danger" role="alert">Đăng ký tài khoản thất bại! (Username đã tồn tại)</div>}
        </div> */}
        <div className="separator">
          <hr className="line" />
          <span>Hoặc</span>
          <hr className="line" />
        </div>
        <a href="" title="Sign In" className="sign-in_ggl">
          <svg height="18" width="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" id="A"></path>
            </defs>
            <g transform="matrix(.727273 0 0 .727273 -.954545 -1.45455)">
              <path fill="#fbbc05" d="M0 37V11l17 13z"></path>
              <path fill="#ea4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path>
              <path fill="#34a853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path>
              <path fill="#4285f4" d="M48 48L17 24l-4-3 35-10z"></path>
            </g>
          </svg>
          <span>
            <img src="https://img.icons8.com/fluency/48/null/google-logo.png" style={{ width: '28px' }} alt="Google Logo" /> Đăng ký với Google
          </span>
        </a>
        <button type="button" className="sign-in_apl">
          <span>
            <img src="https://img.icons8.com/fluency/48/null/facebook-new.png" style={{ width: '28px' }} alt="Facebook Logo" /> Đăng ký với Facebook
          </span>
        </button>
        <p className="note">
          Bạn đã có tài khoản? <a href="/login" style={{ color: 'red', textDecoration: 'none' }}>Đăng Nhập</a>
        </p>
      </form>
    </div>
  </main>
)
}
export default Register