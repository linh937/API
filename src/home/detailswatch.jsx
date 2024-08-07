import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detailswatch() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [inventory, setInventory] = useState(null);

    useEffect(() => {
        if (!id) return; // Handle the case where id is undefined

        axios.get(`/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching product details:', error));

        axios.get(`/api/inventories?productId=${id}`)
            .then(response => setInventory(response.data))
            .catch(error => console.error('Error fetching inventory details:', error));
    }, [id]);

    if (!product || !inventory) return <p>Loading...</p>;

    return (
        <main>
            {/* Chi tiết Sản phẩm */}
            <section className="detail" style={{ marginBottom: '10px' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        {/* Hiển thị hình ảnh sản phẩm */}
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" style={{ padding: '50px' }}>
                                    <img src={`/img/${product.product_img}`} className="d-block w-100" alt={product.product_name} />
                                </div>
                                {/* Thêm các mục carousel khác nếu cần */}
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: '#000' }}></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            <div className="share">
                                <strong>Chia sẻ: &nbsp;</strong>
                                <a href="#"><i className="fa fa-facebook-f"></i></a>
                                <a href="#"><i className="fa fa-facebook-messenger"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">
                                {product.product_name}
                                <span className="badge badge-danger">Giảm 10%</span>
                            </h4>
                            <p className="card-text">
                                <div className="d-flex">
                                    <div className="content text-center">
                                        <div className="ratings">
                                            <span className="product-rating">4.6</span><span>/5</span>
                                            <div className="stars">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content text-center">
                                        <div className="ratings">
                                            <span className="product-rating">3k</span><span>Đánh giá</span>
                                        </div>
                                    </div>
                                    <div className="content text-center">
                                        <div className="ratings">
                                            <span className="product-rating">100k</span><span>Đã bán</span>
                                        </div>
                                    </div>
                                    <div className="content text-center">
                                        <div className="ratings">
                                            <small className="product-rating-small">Tố cáo <i className="fa fa-triangle-exclamation"></i></small>
                                        </div>
                                    </div>
                                </div>
                            </p>
                            <p className="card-text">
                                <small className="text-muted">3 giây trước</small>
                            </p>
                            <div className="alert alert-dark" role="alert" style={{ display: 'flex', padding: '20px' }}>
                                <h3 style={{ marginRight: '20px' }}>
                                    <mark style={{ color: 'red' }}>{product.product_price}</mark>
                                </h3>
                                <a href="#" className="badge badge-danger" style={{ height: '100%' }}>Giá sốc</a>
                            </div>
                            <div className="row">
                                <div className="col-sm-2">Màu:</div>
                                <div className="col-sm-10">
                                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                        <label className="btn btn-outline-secondary active">
                                            <input type="checkbox" name="options" id="option1" autoComplete="off" checked /> Hồng
                                        </label>
                                        <label className="btn btn-outline-secondary">
                                            <input type="checkbox" name="options" id="option2" autoComplete="off" /> Cam
                                        </label>
                                        <label className="btn btn-outline-secondary">
                                            <input type="checkbox" name="options" id="option3" autoComplete="off" /> Đỏ
                                        </label>
                                        <label className="btn btn-outline-secondary">
                                            <input type="checkbox" name="options" id="option4" autoComplete="off" /> Vàng
                                        </label>
                                        <label className="btn btn-outline-secondary">
                                            <input type="checkbox" name="options" id="option5" autoComplete="off" /> Xanh Lá
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ margin: '50px 0' }}>
                                <div className="col-sm-2 d-flex">
                                    Số lượng:
                                    {inventory.quantity} {/* Hiển thị số lượng */}
                                </div>
                                <div className="col-sm-10">
                                    {/* Thêm chi tiết khác nếu cần */}
                                </div>
                            </div>
                            <div className="row">
                                <a href="/cart" type="button" className="button__text">Thêm vào giỏ hàng</a>
                                <a href="/cart" type="button" className="btn btn-danger">Mua Ngay</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sản phẩm liên quan */}
            <section className="related_products">
                <div className="row">
                    {product.relatedProducts && product.relatedProducts.map((relatedProduct) => (
                        <div className="col-sm-2" key={relatedProduct.id} style={{ marginRight: '90px' }}>
                            <div className="card" style={{ width: '18rem', padding: '10px' }}>
                                <img src={`/img/${relatedProduct.img}`} className="card-img-top related_products_img" alt={relatedProduct.name} />
                                <div className="card-body" style={{ marginBottom: '-30px' }}>
                                    <h5 className="card-title">{relatedProduct.name}</h5>
                                    <p className="card-text">
                                        <div className="row">
                                            <strike>{relatedProduct.original_price}</strike>
                                            <strong style={{ color: 'red', marginLeft: '10px' }}>{relatedProduct.discounted_price}</strong>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bình luận */}
            <section className="comments">
                <div className="container">
                    <h2>Bình luận</h2>
                    {product.comments && product.comments.map((comment, index) => (
                        <div className="comment" key={index}>
                            <p><strong>{comment.author}</strong> <small>{comment.date}</small></p>
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Detailswatch;
