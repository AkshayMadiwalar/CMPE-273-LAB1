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

if (localStorage.userdetails) {
  setAuthToken(localStorage.userdetails)
}

function App() {
  return (
    <Fragment>
      <ToastContainer position='top-center'/>
      <NavBarLayout />
      <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/edit" element={<EditProfile/>}/>
          <Route path="/shop" element={<NameYourShop/>}/>
          <Route path="/shop/:name/home" element={<Shop />} />
          <Route path="/shop/myShops" element={<MyShops />} />
        </Routes>

    </Fragment>
  );
}

export default App;
