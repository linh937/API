import Navbar from "./navbar";
import React, { useState, useEffect } from 'react';
function Listproduct(){
    const [products, setProducts] = useState([]);
    const [userNull, setUserNull] = useState(false); // Giả định có cách kiểm tra người dùng đăng nhập
  
    useEffect(() => {
      // Thay thế URL với API endpoint thực tế
      const fetchProducts = async () => {
        try {
          const response = await fetch('/api/products');
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products', error);
        }
      };
  
      fetchProducts();
    }, []);
    return(
      <>
      <Navbar/>
        <main id="main" className="main">
        <div className="pagetitle">
          <h1>Danh Sách Sản Phẩm</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/Statistics.html">Trang Chủ</a></li>
              <li className="breadcrumb-item"><a href="/Statistics.html">Sản Phẩm</a></li>
              <li className="breadcrumb-item active">Danh Sách Sản Phẩm</li>
            </ol>
          </nav>
        </div>
        <section className="shop_section layout_padding">
          {userNull && (
            <div className="notification">
              <div className="toast-war warning-war">
                <i className="fa-solid fa-triangle-exclamation"></i>
                <div className="content">
                  <div className="title-war">Cảnh Báo!</div>
                  <span>Bạn chưa đăng nhập vào tài khoản.</span>
                </div>
              </div>
            </div>
          )}
          <div className="container">
            <div className="row">
              {products.map(p => (
                <div className="col-sm-6 col-xl-3" key={p.id}>
                  <div className="box">
                    <div className="img-box">
                      <img src={`/img/${p.product_img}`} alt={p.product_name} />
                    </div>
                    <div className="detail-box">
                      <h6>{p.product_name}</h6>
                      <h6>
                        Giá: <span>{p.product_price} VNĐ</span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>Mới</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      </>
    )
}
export default Listproduct