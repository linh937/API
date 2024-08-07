// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import Header from './home/header.jsx'
// import Foooter from './home/foooter.jsx'
// import Index from './home/index.jsx'
// import Homedetail from './home/homedetail.jsx'
// import Order from './home/order.jsx'
// import Profile from './home/profile.jsx'
// import Detailswatch from './home/detailswatch.jsx'
// import Login1 from './login/login1.jsx'
// import Cart from './home/cart.jsx'
// import Register from './login/register.jsx'
//  import Changepassword from './login/changepassword.jsx'
//  import Navbar from './admin/navbar.jsx'
//  import Home2 from './admin/home2.jsx'
//  import Footer from './admin/footer.jsx'
//  import Addproduct from './admin/addproduct.jsx'
//  import Inventory from './admin/inventory.jsx'
//  import Listproduct from './admin/listproduct.jsx'
//  import Listuser from './admin/listuser.jsx'
//  import Loginhistory from './admin/loginhistory.jsx'
//  import Notification from './admin/notification.jsx'
//  import Order2 from './admin/od2.jsx'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
   

    
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/homedetail" element={<Homedetail />} />
//           <Route path="/order" element={<Order />} />
//           <Route path="/Detailswatch/:productId" element={<Detailswatch />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<Login1 />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/changepassword" element={<Changepassword />} />
//           <Route path="/admin" element={<Navbar />}>
//             <Route path="home" element={<Home2 />} />
//             <Route path="addproduct" element={<Addproduct />} />
//             <Route path="inventory" element={<Inventory />} />
//             <Route path="listproduct" element={<Listproduct />} />
//             <Route path="listuser" element={<Listuser />} />
//             <Route path="loginhistory" element={<Loginhistory />} />
//             <Route path="notification" element={<Notification />} />
//             <Route path="order2" element={<Order2 />} />
//             <Route path="footer" element={<Footer />} />
//           </Route>
//         </Routes>
//         <Foooter />
//       </Router>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './home/header.jsx';
import Footer from './home/foooter.jsx';
import Index from './home/index.jsx';
import Homedetail from './home/homedetail.jsx';
import Order from './home/order.jsx';
import Profile from './home/profile.jsx';
import Detailswatch from './home/detailswatch.jsx';
import Login1 from './login/login1.jsx';
import Cart from './home/cart.jsx';
import Register from './login/register.jsx';
import Changepassword from './login/changepassword.jsx';
import Navbar from './admin/navbar.jsx';
import Home2 from './admin/home2.jsx';
import Addproduct from './admin/addproduct.jsx';
import Updateproduct from './admin/updateproduct.jsx';
import Inventory from './admin/inventory.jsx';
import Listproduct from './admin/listproduct.jsx';
import Listuser from './admin/listuser.jsx';
import Loginhistory from './admin/loginhistory.jsx';
import Notification from './admin/notification.jsx';
import Order2 from './admin/od2.jsx';

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/homedetail" element={<Homedetail />} />
      <Route path="/order" element={<Order />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/detailswatch" element={<Detailswatch />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login1 />} />
      <Route path="/register" element={<Register />} />
      <Route path="/changepassword" element={<Changepassword />} />
    </Routes>
  );
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/navbar" element={<Navbar />} />
      <Route path="/admin/home2" element={<Home2 />} />
      <Route path="/admin/addproduct" element={<Addproduct />} />
      <Route path="/admin/updateproduct" element={<Updateproduct />} />
      <Route path="/admin/inventory" element={<Inventory />} />
      <Route path="/admin/listproduct" element={<Listproduct />} />
      <Route path="/admin/listuser" element={<Listuser />} />
      <Route path="/admin/loginhistory" element={<Loginhistory />} />
      <Route path="/admin/notification" element={<Notification />} />
      <Route path="/admin/order2" element={<Order2 />} />
    </Routes>
  );
}

function App() {
  const location = useLocation();
  const noNavBarRoutes = ['/login', '/register', '/changepassword', '/admin/login', '/admin/register', '/admin/forgot-password'];

  const isUserRoute = !location.pathname.startsWith('/admin');

  return (
    <div className="App">
      {isUserRoute && !noNavBarRoutes.includes(location.pathname) && <Header />}
      {isUserRoute ? <UserRoutes /> : <AdminRoutes />}
      
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

