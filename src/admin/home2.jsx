import Navbar from "./navbar";

const statisticsData = {
    luotMua: 123, // Example data
    doanhThu: 456789, // Example data
    listTK: [
      { name: 'Sản phẩm A', price: '$100', total_qty: 10 },
      { name: 'Sản phẩm B', price: '$150', total_qty: 5 },
      // Add more items as needed
    ],
  };
function Home2(){

    return(
      <>
      <Navbar/>
        <main id="main" className="main">
        <div className="pagetitle">
          <h1>Thống Kê</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/Statistics.html">Trang Chủ</a></li>
              <li className="breadcrumb-item active">Thống Kê</li>
            </ol>
          </nav>
        </div>
        <section className="section dashboard">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-sm-3">
                <div className="card mb-3" style={{ maxWidth: '540px', backgroundColor: 'white' }}>
                  <div className="row g-0">
                    <div className="col-md-4 card-">
                      <i className="fa-regular fa-eye fai" style={{ fontSize: '30px', color: 'rgb(164, 164, 164)' }}></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title" style={{ color: 'blue', fontWeight: '600' }}>999</h5>
                        <p className="card-text" style={{ color: 'gray' }}>Lượt xem</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                  <div className="row g-0">
                    <div className="col-md-4 card-">
                      <i className="fa-solid fa-cart-shopping fai" style={{ fontSize: '30px', color: 'rgb(164, 164, 164)' }}></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title" style={{ color: 'blue', fontWeight: '600' }}>{statisticsData.luotMua}</h5>
                        <p className="card-text" style={{ color: 'gray' }}>Lượt bán</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                  <div className="row g-0">
                    <div className="col-md-4 card-">
                      <i className="fa-regular fa-comments fai" style={{ fontSize: '30px', color: 'rgb(164, 164, 164)' }}></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title" style={{ color: 'blue', fontWeight: '600' }}>100</h5>
                        <p className="card-text" style={{ color: 'gray' }}>Bình luận</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card text-bg-primary mb-3" style={{ maxWidth: '540px' }}>
                  <div className="row g-0">
                    <div className="col-md-4 card-">
                      <i className="fa-solid fa-money-bills fai" style={{ fontSize: '30px' }}></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title" style={{ fontWeight: '600' }}>{statisticsData.doanhThu}</h5>
                        <p className="card-text">Doanh thu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Đơn giá</th>
                  <th scope="col">Tổng số lượng</th>
                  <th scope="col">Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                {statisticsData.listTK.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.total_qty}</td>
                    <td>{item.total_qty * parseFloat(item.price.replace(/[^0-9.-]+/g, ''))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      </>
    )
} export default Home2