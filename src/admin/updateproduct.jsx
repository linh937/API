import Navbar from "./navbar";
import React, { useState } from 'react';

function Updateproduct(){
    const [updatedProduct, setUpdatedProduct] = useState(product || {});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedProduct({ ...updatedProduct, product_img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onUpdate) onUpdate(updatedProduct);
  };

  const handleDelete = () => {
    if (onDelete) onDelete(updatedProduct.product_id);
  };
    return(
      <>
      <Navbar/>
<main id="main" className="main">
      <div className="pagetitle">
        <h1>Cập Nhật Sản Phẩm</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/Statistics.html">Trang Chủ</a></li>
            <li className="breadcrumb-item"><a href="/Statistics.html">Sản Phẩm</a></li>
            <li className="breadcrumb-item active">Cập Nhật Sản Phẩm</li>
          </ol>
        </nav>
      </div>
      <section className="section dashboard">
        <div className="row">
          <div className="col-xl-12">
            <table className="table table-dark table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Mã</th>
                  <th scope="col">Tên Sản Phẩm</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Mô Tả</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {products.map(item => (
                  <tr key={item.product_id}>
                    <th>{item.product_id}</th>
                    <td>{item.product_name}</td>
                    <td>{item.product_price}</td>
                    <td>{item.product_describe}</td>
                    <td><a href={`/product/edit/${item.product_id}`}>Cập nhật</a></td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="card">
              <div className="card-body pt-3">
                <ul className="nav nav-tabs nav-tabs-bordered">
                  <li className="nav-item">
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#addProduct">Cập Nhật Sản Phẩm</button>
                  </li>
                </ul>
                <div className="tab-content pt-2">
                  <div className="tab-pane fade show active pt-3" id="addProduct">
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <label className="col-md-4 col-lg-3 col-form-label">Hình ảnh</label>
                        <div className="col-md-8 col-lg-9">
                          <img src={updatedProduct.product_img} alt="" style={{ width: '10%' }} />
                          <div className="pt-2">
                            <input type="text" value={updatedProduct.product_img} name="product_img" onChange={handleInputChange} id="Filename" />
                            <input type="file" className="fileform" id="formFile" style={{ display: 'none' }} onChange={handleImageChange} />
                            <label htmlFor="formFile" id="customFile" className="btn btn-primary btn-sm"><i className="fa-solid fa-upload"></i></label>
                            <label id="deleteFile" className="btn btn-danger btn-sm" onClick={() => setUpdatedProduct({ ...updatedProduct, product_img: '' })}><i className="fa-solid fa-trash-can"></i></label>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label className="col-md-4 col-lg-3 col-form-label">Tên Sản Phẩm</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="product_name" value={updatedProduct.product_name || ''} type="text" className="form-control" id="fullName" placeholder="Tên sản phẩm" onChange={handleInputChange} />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label className="col-md-4 col-lg-3 col-form-label">Mô tả</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="product_describe" value={updatedProduct.product_describe || ''} className="form-control" type="text" id="about" style={{ height: '100px' }} onChange={handleInputChange} />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label className="col-md-4 col-lg-3 col-form-label">Giá</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="product_price" value={updatedProduct.product_price || ''} type="text" className="form-control" id="price" onChange={handleInputChange} />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-8 col-lg-9 offset-md-4 offset-lg-3">
                          <button type="submit" className="btn btn-primary">Cập nhật</button>
                          <button type="button" className="btn btn-danger" onClick={handleDelete}>Xóa</button>
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
export default Updateproduct