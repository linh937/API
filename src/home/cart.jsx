function Cart() {
    // Static data
    const [cart, setCart] = useState({
        items: [
            {
                product_img: 'example.jpg',
                product_name: 'Product 1',
                product_price: 12345,
                qty: 1,
                product_id: 1
            }
            // Add more items as needed
        ],
        amount: 12345
    });

    const [order, setOrder] = useState({
        fullname: '',
        email: '',
        phone: '',
        orders_address: '',
        orders_id: '1234',
        orders_time: new Date()
    });

    // Event handlers
    const handleQuantityChange = (index, event) => {
        const newItems = [...cart.items];
        newItems[index].qty = event.target.value;
        setCart({ ...cart, items: newItems });
    };

    const handleRemoveItem = (productId) => {
        const newItems = cart.items.filter(item => item.product_id !== productId);
        setCart({ ...cart, items: newItems });
    };

    const handleOrderChange = (event) => {
        setOrder({ ...order, [event.target.name]: event.target.value });
    };

    const handlePurchase = () => {
        // Implement purchase logic
        alert('Order placed!');
    };
    return(
        <main>
            <div className="container">
                <section className="h-100 h-custom">
                    <div className="container h-100 py-5">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Sản Phẩm</th>
                                                <th scope="col">Đơn Giá</th>
                                                <th scope="col">Số Lượng</th>
                                                <th scope="col">Thành Tiền</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.items.map((item, index) => (
                                                <tr key={item.product_id}>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <img src={`/img/${item.product_img}`} className="img-fluid rounded-3" style={{ width: '120px' }} alt="" />
                                                            <div className="flex-column ms-4">
                                                                <p className="mb-2">{item.product_name}</p>
                                                                <p className="mb-0"></p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-middle">
                                                        <p className="mb-0" style={{ fontWeight: '500' }}>
                                                            {item.product_price.toLocaleString()} VNĐ
                                                        </p>
                                                    </td>
                                                    <td className="align-middle">
                                                        <div className="d-flex flex-row">
                                                            <input
                                                                id="form1"
                                                                onChange={(e) => handleQuantityChange(index, e)}
                                                                value={item.qty}
                                                                min="1"
                                                                name="quantity"
                                                                type="number"
                                                                className="form-control form-control-sm"
                                                                style={{ width: '50px' }}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">
                                                        <p className="mb-0" style={{ fontWeight: '500' }}>
                                                            {(item.qty * item.product_price).toLocaleString()} VNĐ
                                                        </p>
                                                    </td>
                                                    <td className="align-middle">
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() => handleRemoveItem(item.product_id)}
                                                        >
                                                            Xóa
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="card shadow-2-strong mb-5 mb-lg-0" style={{ borderRadius: '16px' }}>
                                    <div className="card-body p-4">
                                        <div className="row">
                                            <div className="col-md-9 col-lg-4 col-xl-9">
                                                <div className="row">
                                                    <div className="col-12 col-xl-12">
                                                        <div className="form-outline mb-4 mb-xl-5" hidden>
                                                            <label className="form-label" htmlFor="orderId">Order ID</label>
                                                            <input
                                                                type="text"
                                                                id="orderId"
                                                                value={order.orders_id}
                                                                className="form-control form-control-lg"
                                                                placeholder="Tên người nhận"
                                                                disabled
                                                            />
                                                        </div>
                                                        <div className="form-outline mb-4 mb-xl-5" hidden>
                                                            <label className="form-label" htmlFor="orderDate">Date</label>
                                                            <input
                                                                type="text"
                                                                id="orderDate"
                                                                className="form-control form-control-lg"
                                                                placeholder="Tên người nhận"
                                                                value={order.orders_time.toLocaleDateString()}
                                                            />
                                                        </div>
                                                        <div className="form-outline mb-4 mb-xl-5">
                                                            <label className="form-label" htmlFor="fullname">Tên Người Nhận</label>
                                                            <input
                                                                type="text"
                                                                id="fullname"
                                                                name="fullname"
                                                                value={order.fullname}
                                                                onChange={handleOrderChange}
                                                                className="form-control form-control-lg"
                                                                placeholder="Tên người nhận"
                                                            />
                                                        </div>
                                                        <div className="form-outline mb-4 mb-xl-5">
                                                            <label className="form-label" htmlFor="email">Email</label>
                                                            <input
                                                                type="email"
                                                                id="email"
                                                                name="email"
                                                                value={order.email}
                                                                onChange={handleOrderChange}
                                                                className="form-control form-control-lg"
                                                                placeholder="Email"
                                                            />
                                                        </div>
                                                        <div className="form-outline mb-4 mb-xl-5">
                                                            <label className="form-label" htmlFor="phone">Số Điện Thoại</label>
                                                            <input
                                                                type="text"
                                                                id="phone"
                                                                name="phone"
                                                                value={order.phone}
                                                                onChange={handleOrderChange}
                                                                className="form-control form-control-lg"
                                                                placeholder="Số điện thoại"
                                                            />
                                                        </div>
                                                        <div className="form-outline mb-4 mb-xl-5">
                                                            <label className="form-label" htmlFor="address">Địa chỉ</label>
                                                            <textarea
                                                                id="address"
                                                                name="orders_address"
                                                                value={order.orders_address}
                                                                onChange={handleOrderChange}
                                                                className="form-control form-control-lg"
                                                                placeholder="Địa chỉ"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-xl-3">
                                                <div className="d-flex justify-content-between" style={{ fontWeight: '500' }}>
                                                    <p className="mb-2">Tổng tiền hàng</p>
                                                    <p className="mb-2">{cart.amount.toLocaleString()} VNĐ</p>
                                                </div>
                                                <div className="d-flex justify-content-between" style={{ fontWeight: '500' }}>
                                                    <p className="mb-0">Phí vận chuyển</p>
                                                    <p className="mb-0">0 VNĐ</p>
                                                </div>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-4" style={{ fontWeight: '500' }}>
                                                    <p className="mb-2">Tổng Thanh Toán</p>
                                                    <p className="mb-2" style={{ color: 'red' }}>{cart.amount.toLocaleString()} VNĐ</p>
                                                </div>
                                                <button className="btn_DH" onClick={handlePurchase}>
                                                    <span>Đặt Hàng</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default Cart