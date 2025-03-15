import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Layout/Header/Header'

const User = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default User
