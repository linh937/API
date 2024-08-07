function Changepassword(){
    // const [success, setSuccess] = useState(false);
    // const [errorNull, setErrorNull] = useState(false);
  
    // const handleFormSubmit = (e) => {
    //   e.preventDefault();
    //   // Handle form submission logic here
    //   // For demonstration, we're setting the states manually
    //   // setSuccess(true);
    //   // setErrorNull(true);
    // };
return(
<main>
      <div className="form-box">
        <form className="form-change" action="/account/changePassword" method="post" >
          <span className="title-change">Đổi Mật Khẩu</span>
          <span className="subtitle-change">Vui lòng không chia sẻ mật khẩu.</span>
          <div className="form-container-change">
            <input type="password" className="input-change" name="passwords" placeholder="Mật khẩu mới" required />
            <input type="password" className="input-change" name="passwordsTwo" placeholder="Nhập lại mật khẩu" required />
          </div>
          <button type="submit">Đổi mật khẩu</button>
          {/* <div className="form-container-change">
            {success && <div className="alert alert-success" role="alert">Đổi mật khẩu thành công!</div>}
            {errorNull && <div className="alert alert-danger" role="alert">Xác nhận mật khẩu không đúng!</div>}
          </div> */}
        </form>
        <div className="form-section-change">
          <p>
            Bạn đã có tài khoản? <a href="/account/login">Đăng nhập</a>
          </p>
        </div>
      </div>
    </main>
)
}
export default Changepassword