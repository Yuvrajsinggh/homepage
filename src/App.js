import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './container/Home';
import Profile from './container/Profile';
import Followers from './components/Followers';
import Following from './components/Following';
import Login from './container/Login/Login';
import Settings from './container/Settings';

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/followers" element={<Followers />} />
      <Route path="/following" element={<Following />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default App