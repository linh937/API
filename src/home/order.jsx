function Order() {
    // Dữ liệu set cứng cho đơn hàng
const orders = [
    {
        orders_id: '12345',
        orders_address: '123 Đường ABC, TP.HCM',
        orders_time: '2024-08-01',
        status: 'completed' // Trạng thái đơn hàng: 'pending', 'processing', 'completed', 'cancelled'
    },
    // Thêm các đơn hàng khác nếu cần
];
    return(
        <main>
        <section className="shop_section layout_padding" style={{ marginBottom: '100px' }}>
            <div className="container">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card w-75" style={{ backgroundColor: '#ffff' }}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img
                                                src="/icon/avatarNEW.png"
                                                alt="Ảnh đại diện"
                                                className="d-flex align-items-start"
                                                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                            />
                                        </div>
                                        <div className="col-sm-8">
                                            <p style={{ marginBottom: '0px' }}><strong>lucas</strong></p>
                                            <i className="fa-solid fa-user-pen" style={{ color: '#000000' }}></i>
                                            <a href="#" style={{ marginLeft: '5px', fontSize: '15px' }}> Sửa Hồ Sơ</a>
                                        </div>
                                    </div>
                                    <hr />
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">Tài khoản của tôi</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Đơn mua</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Kho Voucher</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8" style={{ marginLeft: '-100px' }}>
                            <div className="card w-100 h-auto">
                                <div className="card-body w-100 h-auto" style={{ backgroundColor: '#ffff' }}>
                                    <div id="tabs">
                                        <nav>
                                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Tất cả</a>
                                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Chờ thanh toán</a>
                                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Đang giao</a>
                                                <a className="nav-item nav-link" id="nav-tab" data-toggle="tab" href="#nav-tab" role="tab" aria-controls="nav-about" aria-selected="false">Hoàn thành</a>
                                                <a className="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Đã hủy</a>
                                            </div>
                                        </nav>
                                        <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                                            {['home', 'profile', 'contact', 'tab', 'about'].map((tab, index) => (
                                                <div
                                                    className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                                                    id={`nav-${tab}`}
                                                    role="tabpanel"
                                                    aria-labelledby={`nav-${tab}-tab`}
                                                    key={tab}
                                                >
                                                    {orders.map((order, orderIndex) => (
                                                        <div className="each" key={orderIndex}>
                                                            <div className="panle-header">
                                                                MÃ ĐƠN HÀNG <span>{order.orders_id}</span>
                                                            </div>
                                                            <div className="panel-body">
                                                                <div className="row" style={{ padding: '20px' }}>
                                                                    <img src="/img/f1.png" alt="" className="w-25" />
                                                                    <div className="col d-flex align-items-center">
                                                                        <div className="text-title">{order.orders_address}</div>
                                                                    </div>
                                                                    <div className="col d-flex align-items-center">
                                                                        <strong className="text-title">{new Date(order.orders_time).toLocaleString()}</strong>
                                                                    </div>
                                                                    <div className="col d-flex align-items-center justify-content-center">
                                                                        <a
                                                                            href={`/order/detail/${order.orders_id}`}
                                                                            className="btn btn-primary h-25"
                                                                        >
                                                                            <i className="fa-solid fa-magnifying-glass"></i> Xem chi tiết
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}
export default Order