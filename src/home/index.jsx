import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Index() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        console.log(response.data);
        
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <main>
      <section className="banner-img">
        <div className="row">
          <div className="col-sm-1 icon_header">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="col-sm-11">
            <div className="slider">
              <div className="list">
                <div className="item">
                  <img src="/img/Slide1.jpg" alt="Slide 1" />
                </div>
                <div className="item">
                  <img src="/img/Slide2.jpg" alt="Slide 2" />
                </div>
                <div className="item">
                  <img src="/img/Slide3.png" alt="Slide 3" />
                </div>
                <div className="item">
                  <img src="/img/Slide4.png" alt="Slide 4" />
                </div>
                <div className="item">
                  <img src="/img/Slide5.png" alt="Slide 5" />
                </div>
              </div>
              <div className="buttons">
                <button id="prev">
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <button id="next">
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
              <ul className="dots">
                <li className="active"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Đồng Hồ Mới Nhất</h2>
          </div>
          <div className="col-sm-12">
            <nav className="navbar navbar-expand-lg navbar-light navsbar-menu-sort">
              <div className="collection">
                <label>Sắp xếp theo</label>
                <button
                  type="button"
                  className="btn btn-secondary btn-sort"
                  data-toggle="modal"
                  data-target="#exampleModalScrollable"
                >
                  Bộ lọc <i className="fa-sharp fa-solid fa-filter fa-beat" style={{ color: '#ff7300' }}></i>
                </button>

                <div
                  className="modal fade"
                  id="exampleModalScrollable"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalScrollableTitle"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content modal-sort-main">
                      <div className="modal-body">
                        <div className="col-sm-12">
                          <label>HÃNG</label>
                          <div className="row row-brand">
                            <div className="btn-group-toggle" data-toggle="buttons">
                              <label className="btn btn-outline-dark">
                                <input type="checkbox" checked autoComplete="off" /> Casio
                              </label>
                            </div>
                            <div className="btn-group-toggle" data-toggle="buttons">
                              <label className="btn btn-outline-dark">
                                <input type="checkbox" checked autoComplete="off" /> ELIO
                              </label>
                            </div>
                            <div className="btn-group-toggle" data-toggle="buttons">
                              <label className="btn btn-outline-dark">
                                <input type="checkbox" checked autoComplete="off" /> TITAN
                              </label>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="col-sm-12">
                          <label>GIÁ</label>
                          <div className="row row-brand">
                            <div className="btn-group-toggle" data-toggle="buttons">
                              <label className="btn btn-outline-dark">
                                <input type="checkbox" checked autoComplete="off" /> Dưới 1 triệu
                              </label>
                            </div>
                            <div className="btn-group-toggle" data-toggle="buttons">
                              <label className="btn btn-outline-dark">
                                <input type="checkbox" checked autoComplete="off" /> 2 triệu
                              </label>
                            </div>
                            <div className="btn-group-toggle" data-toggle="buttons">
                              <label className="btn btn-outline-dark">
                                <input type="checkbox" checked autoComplete="off" /> Trên 2 triệu
                              </label>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="col-sm-12">
                          <label>TÍNH NĂNG ĐẶT BIỆT</label>
                          <div className="row row-brand">
                            <div className="btn-group-toggle" data-toggle="buttons">
                              <label className="btn btn-outline-dark">
                                <input type="checkbox" checked autoComplete="off" /> Kháng nước, bụi
                              </label>
                            </div>
                            <div className="btn-group-toggle" data-toggle="buttons">
                              <label className="btn btn-outline-dark">
                                <input type="checkbox" checked autoComplete="off" /> Hỗ trợ 5G
                              </label>
                            </div>
                            <div className="btn-group-toggle" data-toggle="buttons" style={{ marginTop: '10px' }}>
                              <label className="btn btn-outline-dark">
                                <input type="checkbox" checked autoComplete="off" /> Bảo mật khuôn mặt 3D
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary">
                          Tìm kiếm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-secondary btn-sort"
                  data-toggle="modal"
                  data-target="#exampleModalScrollable2"
                >
                  Hãng
                </button>

                <div
                  className="modal fade"
                  id="exampleModalScrollable2"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalScrollableTitle"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content modal-brand">
                      <div className="modal-body">
                        <div className="col-sm-12">
                          <label>HÃNG</label>
                          <form action="/home/searchByBrand" method="get">
                            <div className="row row-brand">
                              <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-outline-dark">
                                  <input type="checkbox" name="brands" value="Casio" /> Casio
                                </label>
                              </div>
                              <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-outline-dark">
                                  <input type="checkbox" name="brands" value="ELIO" /> ELIO
                                </label>
                              </div>
                              <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-outline-dark">
                                  <input type="checkbox" name="brands" value="TITAN" /> TITAN
                                </label>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="submit" className="btn btn-secondary">
                                Tìm kiếm
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-secondary btn-sort"
                  data-toggle="modal"
                  data-target="#exampleModalScrollable3"
                >
                  Giá
                </button>

                <div
                  className="modal fade"
                  id="exampleModalScrollable3"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalScrollableTitle"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content modal-brand">
                      <div className="modal-body">
                        <form action="/home/search" method="get">
                          <div className="col-sm-12">
                            <label>GIÁ</label>
                            <div className="row row-brand">
                              <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-outline-dark">
                                  <input type="checkbox" name="price" value="0" /> Dưới 1 triệu
                                </label>
                              </div>
                              <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-outline-dark">
                                  <input type="checkbox" name="price" value="1000000" /> 2 triệu
                                </label>
                              </div>
                              <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-outline-dark">
                                  <input type="checkbox" name="price" value="2000000" /> Trên 2 triệu
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="submit" className="btn btn-secondary">
                              Tìm kiếm
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <div className="row">
              {products.map((product) => (
                <div className="col-sm-6 col-xl-3" key={product.productId}>
                  <div className="box">
                    <Link to={`/Detailswatch/${product.productId}`}>
                      <div className="img-box">
                        
                        <img src={product.product_img} alt={product.product_name} />
                      </div>
                      <div className="detail-box">
                        <h6>{product.product_name}</h6>
                        <h6>
                          Giá: <span>{product.product_price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                        </h6>
                      </div>
                      <div className="new">
                        <span> Mới </span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Index;
