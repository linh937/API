function Homedetail() {
    const order = {
        orders_id: '12345',
        fullname: 'Nguyễn Văn A',
        orders_time: '2024-08-01',
        orders_address: '123 Đường ABC, TP.HCM'
    };
    
    const detailOrder = [
        {
            product: { product_id: 'P001', product_name: 'Sản phẩm 1' },
            price: 100000,
            quantity: 2
        },
        {
            product: { product_id: 'P002', product_name: 'Sản phẩm 2' },
            price: 200000,
            quantity: 1
        }
    ];
    return(
        <main>
        <div className="card card-primary">
            <div className="card-header">Thông tin đơn hàng</div>
            <div className="card-body">
                <div className="row">
                    <div className="form-group col-sm-4">
                        <div>Mã đơn hàng:</div>
                        <input value={order.orders_id} className="form-control" readOnly />
                    </div>
                    <div className="form-group col-sm-4">
                        <div>Họ và tên:</div>
                        <input value={order.fullname} className="form-control" readOnly />
                    </div>
                    <div className="form-group col-sm-4">
                        <div>Ngày đặt hàng:</div>
                        <input value={order.orders_time} className="form-control" readOnly />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-12">
                        <div>Địa chỉ:</div>
                        <textarea value={order.orders_address} className="form-control" readOnly></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div className="card card-primary">
            <div className="card-header">Danh sách đơn hàng</div>
            <table className="table table-striped">
                <thead className="bg-dark text-white" style={{ fontSize: '14px' }}>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                    </tr>
                </thead>
                <tbody style={{ fontSize: '14px' }}>
                    {detailOrder.map((detail, index) => (
                        <tr key={index}>
                            <th style={{ verticalAlign: 'middle' }}>{detail.product.product_id}</th>
                            <td style={{ verticalAlign: 'middle' }}>{detail.product.product_name}</td>
                            <td style={{ verticalAlign: 'middle' }}>{detail.price}</td>
                            <td style={{ verticalAlign: 'middle' }}>{detail.quantity}</td>
                            <td style={{ verticalAlign: 'middle' }}>{detail.quantity * detail.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </main>
    )
}
export default Homedetail