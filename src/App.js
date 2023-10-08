import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './container/Home';
import Profile from './container/Profile';
import Followers from './components/Followers';
import Following from './components/Following';

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/followers" element={<Followers />} />
      <Route path="/following" element={<Following />} />
    </Routes>
  )
}

export default App