function Foooter() {
    return(
        <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 footer-col">
              <div className="footer_detail">
                <h4>GIỚI THIỆU</h4>
                <p style={{ color: '#ffff' }}>
                  Lucas Shop chuyên bán những dòng đồng hồ nam - nữ thời trang phù hợp cho tất cả các lứa tuổi
                </p>
                <div className="footer_social">
                  <a href="">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-col">
              <div className="footer_contact">
                <h4>LIÊN HỆ</h4>
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span> Khóm 6A, Trần Văn Thời, Cà Mau, Việt Nam </span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span> 083 856 5542 </span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span> tungtqpc04315@fpt.edu.vn </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-col">
              <div className="footer_contact">
                <h4>ĐĂNG KÝ</h4>
                <form action="#">
                  <input type="text" placeholder="Enter email" />
                  <button type="submit">Đăng ký</button>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-col">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.347174056731!2d104.81688607363257!3d9.032060288943903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a6a5fedba779c3%3A0x8235711c1f809bc8!2zS2jDs20gNmEgVGjhu4sgVHLhuqVuIFPDtG5nIMSQ4buRYyBodXnhu4duIFRy4bqnbiBWxINuIFRo4budaSB04buJbmggQ8OgIE1hdQ!5e0!3m2!1svi!2s!4v1682506129325!5m2!1svi!2s"
                      height="500px"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> FPT POLYTECHNIC CAN THO 2023
              <a href="https://www.facebook.com/profile.php?id=100070215626147">
                - TO QUOC TUNG PC04315
              </a>
            </p>
          </div>
        </div>
      </footer>
    )
    }
    export default Foooter