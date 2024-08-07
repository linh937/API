import Navbar from "./navbar";
import React, { useState, useEffect } from 'react';

function Inventory(){
    const [inventoryList, setInventoryList] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [quantity, setQuantity] = useState('');
  
    useEffect(() => {
      // Fetch inventory list from server
      const fetchInventory = async () => {
        try {
          const response = await axios.get('/api/inventory'); // Update with your API endpoint
          setInventoryList(response.data);
        } catch (error) {
          console.error('Error fetching inventory data', error);
        }
      };
      fetchInventory();
    }, []);
  
    const handleEditClick = (item) => {
      setSelectedItem(item);
      setQuantity(item.quantity);
    };
  
    const handleUpdate = async (event) => {
      event.preventDefault();
      if (selectedItem) {
        try {
          await axios.post('/api/inventory/update', {
            idInventory: selectedItem.id,
            quantity
          });
          // Update local state after successful update
          setInventoryList(prevList =>
            prevList.map(item =>
              item.id === selectedItem.id ? { ...item, quantity } : item
            )
          );
          setSelectedItem(null);
          setQuantity('');
        } catch (error) {
          console.error('Error updating inventory', error);
        }
      }
    };
    return(
      <>
      <Navbar/>
<main id="main" className="main">
      <div className="pagetitle">
        <h1>Quản lí kho</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/Statistics.html">Trang Chủ</a></li>
            <li className="breadcrumb-item"><a href="/Statistics.html">Sản Phẩm</a></li>
            <li className="breadcrumb-item active">Kho hàng</li>
          </ol>
        </nav>
      </div>
      <section className="section dashboard">
        <div className="row">
          <div className="col-xl-12">
            <table className="table table-dark table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Mã kho</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {inventoryList.map(item => (
                  <tr key={item.id}>
                    <th>{item.id}</th>
                    <td>{item.product.product_name}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-link"
                        onClick={() => handleEditClick(item)}
                      >
                        Cập nhật
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {selectedItem && (
              <div className="card">
                <div className="card-body pt-3">
                  <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                      <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#addProduct">
                        Cập nhật kho hàng
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content pt-2">
                    <div className="tab-pane fade show active pt-3" id="addProduct">
                      <form onSubmit={handleUpdate}>
                        <input type="hidden" name="idInventory" value={selectedItem.id} />
                        <div className="row mb-3">
                          <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Tên Sản Phẩm</label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="product_name"
                              value={selectedItem.product.product_name}
                              type="text"
                              className="form-control"
                              id="fullName"
                              readOnly
                              placeholder="Tên sản phẩm"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label htmlFor="quantity" className="col-md-4 col-lg-3 col-form-label">Số lượng</label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="quantity"
                              value={quantity}
                              min="0"
                              className="form-control"
                              type="number"
                              id="quantity"
                              onChange={(e) => setQuantity(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-8 col-lg-9 offset-md-4 offset-lg-3">
                            <button type="submit" className="btn btn-primary">Cập nhật</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
    </>
    )
} export default Inventory