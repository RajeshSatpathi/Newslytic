import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from "../Pages/HomePage/index.jsx"
import AboutPage from "../Pages/AboutPage/index.jsx"
import MainLayout from "../Component/Layouts/MainLayout.jsx"
function AppRoute() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>


      </Routes>
    </div>
  )
}

export default AppRoute