import Navbar from "./navbar";
import React, { useState } from 'react';
function Addproduct(){
    const [productImg, setProductImg] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescribe, setProductDescribe] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [branch, setBranch] = useState('');
    const [type, setType] = useState('');
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setProductImg(URL.createObjectURL(file));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission
      console.log({
        productImg,
        productName,
        productDescribe,
        productPrice,
        branch,
        type
      });
    };
    return(
      <>
      <Navbar/>
        <main id="main" className="main">
        <div className="pagetitle">
          <h1>Thêm Sản Phẩm</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/Statistics.html">Trang Chủ</a></li>
              <li className="breadcrumb-item"><a href="/Statistics.html">Sản Phẩm</a></li>
              <li className="breadcrumb-item active">Thêm Sản Phẩm</li>
            </ol>
          </nav>
        </div>
        <section className="section dashboard">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body pt-3">
                  <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                      <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#addProduct">Thêm Sản Phẩm</button>
                    </li>
                  </ul>
                  <div className="tab-content pt-2">
                    <div className="tab-pane fade show active pt-3" id="addProduct">
                      <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="row mb-3">
                          <label className="col-md-4 col-lg-3 col-form-label">Hình ảnh</label>
                          <div className="col-md-8 col-lg-9">
                            <img src={productImg} alt="" id="imgProduct" style={{ width: '10%' }} />
                            <div className="pt-2">
                              <input type="text" name="product_img" id="Filename" hidden />
                              <input
                                type="file"
                                className="fileform"
                                id="formFile"
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                              />
                              <label
                                htmlFor="formFile"
                                id="customFile"
                                className="btn btn-primary btn-sm"
                              >
                                <i className="fa-solid fa-upload"></i>
                              </label>
                              <label id="deleteFile" className="btn btn-danger btn-sm">
                                <i className="fa-solid fa-trash-can"></i>
                              </label>
                            </div>
                          </div>
                        </div>
  
                        <div className="row mb-3">
                          <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Tên Sản Phẩm</label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="product_name"
                              type="text"
                              className="form-control"
                              id="fullName"
                              placeholder="Tên sản phẩm"
                              value={productName}
                              onChange={(e) => setProductName(e.target.value)}
                            />
                          </div>
                        </div>
  
                        <div className="row mb-3">
                          <label htmlFor="about" className="col-md-4 col-lg-3 col-form-label">Mô tả</label>
                          <div className="col-md-8 col-lg-9">
                            <textarea
                              name="product_describe"
                              className="form-control"
                              id="about"
                              style={{ height: '100px' }}
                              value={productDescribe}
                              onChange={(e) => setProductDescribe(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
  
                        <div className="row mb-3">
                          <label htmlFor="price" className="col-md-4 col-lg-3 col-form-label">Giá</label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="product_price"
                              type="text"
                              className="form-control"
                              id="price"
                              value={productPrice}
                              onChange={(e) => setProductPrice(e.target.value)}
                            />
                          </div>
                        </div>
  
                        <div className="row mb-3">
                          <label htmlFor="brand" className="col-md-4 col-lg-3 col-form-label">Thương hiệu</label>
                          <div className="col-md-8 col-lg-9">
                            <select
                              className="form-select"
                              name="branch"
                              value={branch}
                              onChange={(e) => setBranch(e.target.value)}
                            >
                              <option value="1">Brand 1</option>
                              <option value="2">Brand 2</option>
                              <option value="3">Brand 3</option>
                            </select>
                          </div>
                        </div>
  
                        <div className="row mb-3">
                          <label htmlFor="Country" className="col-md-4 col-lg-3 col-form-label">Loại</label>
                          <div className="col-md-8 col-lg-9">
                            <select
                              className="form-select"
                              name="type"
                              value={type}
                              onChange={(e) => setType(e.target.value)}
                            >
                              <option value="1">Type 1</option>
                              <option value="2">Type 2</option>
                              <option value="3">Type 3</option>
                            </select>
                          </div>
                        </div>
  
                        <div className="row mb-3">
                          <div className="col-md-8 col-lg-9 offset-md-4 offset-lg-3">
                            <button type="submit" className="btn btn-primary">Thêm</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      </>
    )
}
export default Addproduct