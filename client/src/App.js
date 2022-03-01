import { Fragment } from 'react';
import './App.css';
import NavBarLayout from './components/layouts/NavBarLayout';
import { Routes, Route } from 'react-router-dom';
import UserProfile from './components/profile/UserProfile';
import EditProfile from './components/profile/EditProfile';
import NameYourShop from './components/shop/NameYourShop';
import Shop from './components/shop/Shop';
import setAuthToken from './components/utils/setAuthToken';
import { ToastContainer } from 'react-bootstrap';
import MyShops from './components/profile/MyShops';
import Dashboard from './components/dashboard/Dashboard';
import ItemOverview from './components/cart/ItemOverview';
import Cart from './components/cart/Cart';
import PrivateRoute from './components/private-routes/PrivateRoute';
import ProductList from './components/products/ProductList';

if (localStorage.userdetails) {
  setAuthToken(localStorage.userdetails)
}

function App() {
  return (
    <Fragment>
      <ToastContainer position='top-center' />
      <NavBarLayout />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/products" element={<ProductList />} />

        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<UserProfile />} />
        </Route>

        <Route path="/profile/edit" element={<PrivateRoute />}>
          <Route path="/profile/edit" element={<EditProfile />} />
        </Route>

        <Route path="/shop" element={<PrivateRoute />}>
          <Route path="/shop" element={<NameYourShop />} />
        </Route>

        <Route path="/shop/:name/home" element={<PrivateRoute />}>
          <Route path="/shop/:name/home" element={<Shop />} />
        </Route>

        <Route path="/shop/myShops" element={<PrivateRoute />}>
          <Route path="/shop/myShops" element={<MyShops />} />
        </Route>

        <Route path="/item/:id/overview" element={<PrivateRoute />}>
          <Route path="/item/:id/overview" element={<ItemOverview />} />
        </Route>

        <Route path="/cart" element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>

      </Routes>

    </Fragment>
  );
}

export default App;
