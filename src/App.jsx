import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import { useSelector } from 'react-redux'
import ContactUs from './pages/ContactUs'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/success' element={
          <ProtectedRoute>
            <Success />
          </ProtectedRoute>
        } />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App;

const ProtectedRoute = ({ children }) => {
  const cartItems = useSelector((state) => state.cart.cart);
  return cartItems.length > 0 ? children : <Navigate to={"/"} />
};

