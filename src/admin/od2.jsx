import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
function Order2(){
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
  
    useEffect(() => {
      // Hàm giả lập để lấy dữ liệu chi tiết đơn hàng từ API hoặc dữ liệu tĩnh
      const fetchOrderDetails = async () => {
        try {
          // Ví dụ: const response = await fetch(`/api/orders/${orderId}`);
          // const data = await response.json();
          // setOrder(data);
          // Dữ liệu giả lập
          const data = {
            id: orderId,
            product_name: 'Sản phẩm A',
            description: 'Mô tả sản phẩm A',
            price: '500.000 VNĐ',
            brand: 'LC',
            category: 'Điện tử',
            status: 'Chuẩn bị',
            img: '/img/w1.png'
          };
          setOrder(data);
        } catch (error) {
          console.error('Error fetching order details', error);
        }
      };
  
      fetchOrderDetails();
    }, [orderId]);
  
    if (!order) {
      return <div>Loading...</div>;
    }
    return(
      <main id="main" className="main">
      <div className="pagetitle">
        <h1>Chi Tiết Đơn Hàng</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/Statistics.html">Trang Chủ</a></li>
            <li className="breadcrumb-item"><a href="/Statistics.html">Quản Lý Đơn Hàng</a></li>
            <li className="breadcrumb-item active">Chi Tiết Đơn Hàng</li>
          </ol>
        </nav>
      </div>
      <section className="section dashboard">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body pt-3">
                <form>
                  <div className="row mb-3">
                    <label htmlFor="" className="col-md-4 col-lg-3 col-form-label">Hình ảnh</label>
                    <div className="col-md-8 col-lg-9">
                      <img src={order.img} alt="" style={{ width: '10%' }} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Tên Sản Phẩm</label>
                    <div className="col-md-8 col-lg-9">
                      <input name="fullName" type="text" className="form-control" id="fullName" value={order.product_name} readOnly />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="about" className="col-md-4 col-lg-3 col-form-label">Mô tả</label>
                    <div className="col-md-8 col-lg-9">
                      <textarea name="about" className="form-control" id="about" style={{ height: '100px' }} value={order.description} readOnly />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="price" className="col-md-4 col-lg-3 col-form-label">Giá</label>
                    <div className="col-md-8 col-lg-9">
                      <input name="price" type="text" className="form-control" id="price" value={order.price} readOnly />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="brand" className="col-md-4 col-lg-3 col-form-label">Thương hiệu</label>
                    <div className="col-md-8 col-lg-9">
                      <select className="form-select" aria-label="Default select example" value={order.brand} readOnly>
                        <option value="LC">LC</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="category" className="col-md-4 col-lg-3 col-form-label">Loại</label>
                    <div className="col-md-8 col-lg-9">
                      <select className="form-select" aria-label="Default select example" value={order.category} readOnly>
                        <option value="Electronics">Điện tử</option>
                        <option value="Clothing">Quần áo</option>
                        <option value="Accessories">Phụ kiện</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="status" className="col-md-4 col-lg-3 col-form-label">Trạng Thái</label>
                    <div className="col-md-8 col-lg-9">
                      <select className="form-select" aria-label="Default select example" value={order.status} readOnly>
                        <option value="pending">Chuẩn bị</option>
                        <option value="shipping">Đang giao</option>
                        <option value="completed">Hoàn Thành</option>
                        <option value="canceled">Hủy Đơn</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    )
}
export default Order2