import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home';
import PrivateRoute from './pages/Account/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import AdminRoute from './pages/Account/AdminRoute/AdminRoute';
import Account from './pages/Account/Account';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import Shop from './pages/Shop/Shop';
import Reviews from './pages/Reviews/Reviews';
import AboutUs from './pages/AboutUs/AboutUs';
import Product from './pages/Shop/Product/Product';
import NotFound from './pages/NotFound/NotFound';
import Products from './pages/Dashboard/Products/Products';
import ProductList from './pages/Dashboard/Products/ProductList/ProductList';
import AddProduct from './pages/Dashboard/Products/AddProduct/AddProduct';
import UpdateProduct from './pages/Dashboard/Products/UpdateProduct/UpdateProduct';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import Media from './pages/Dashboard/Media/Media';
import MyOrder from './pages/Dashboard/MyOrder/MyOrder';
import Orders from './pages/Dashboard/Orders/Orders';
import Ratings from './pages/Dashboard/Ratings/Ratings';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:id" element={<Product />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/account" element={<Account />}></Route>
          {/* //private Route start */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path="" element={<DashboardHome />}></Route>
              <Route path="media" element={<Media />}></Route>
              <Route path="my-orders" element={<MyOrder />}></Route>
              <Route path="ratings" element={<Ratings />} />
              {/* //admin Route start */}
              <Route element={<AdminRoute></AdminRoute>}>

                <Route path="make-admin" element={<MakeAdmin />} />
                <Route path="orders" element={<Orders />} />
                {/* products route start */}
                <Route path="products" element={<Products />}>
                  <Route path="" element={<ProductList />}></Route>
                  <Route path="add-new" element={<AddProduct />}></Route>
                  <Route path="update/:id" element={<UpdateProduct />}></Route>
                </Route>

                {/* products route ends */}
              </Route>
              {/* //admin Route end */}
            </Route>
          </Route>
          {/* //private Route ends */}
          {/* //Not Found page */}
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
