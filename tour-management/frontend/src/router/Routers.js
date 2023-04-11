import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import ThankYou from '../pages/ThankYou';
import Dashboard from "../Admin-site/pages/Dashboard"
import BookingsList from "../Admin-site/pages/BookingsList";
import ListTour from "../Admin-site/pages/ListTour";
import AddTour from "../Admin-site/pages/AddTour";
import Manageraccount from "../Admin-site/pages/ManagerAccount";

const Routers = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/tours' element={<Tours />} />
      <Route path='/tours/:id' element={<TourDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/thank-you' element={<ThankYou />} />
      <Route path='/tour/search' element={<SearchResultList />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/bookingslist" element={<BookingsList />} />
      <Route path="/admin/listTour" element={<ListTour />} />
      <Route path="/admin/addTours" element={<AddTour />} />
      <Route path="/admin/manageraccount" element={<Manageraccount />} />
    </Routes>
  )
}

export default Routers