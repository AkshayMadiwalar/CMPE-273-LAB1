import { Fragment } from 'react';
import './App.css';
import NavBarLayout from './components/layouts/NavBarLayout';
import { Routes, Route } from 'react-router-dom';
import UserProfile from './components/profile/UserProfile';
import EditProfile from './components/profile/EditProfile';
import NameYourShop from './components/shop/NameYourShop';
import Shop from './components/shop/Shop';


function App() {
  return (
    <Fragment>
      <NavBarLayout />
      <Routes>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/edit" element={<EditProfile/>}/>
          <Route path="/shop" element={<NameYourShop/>}/>
          <Route path="/shop/home" element={<Shop />} />
        </Routes>

    </Fragment>
  );
}

export default App;
