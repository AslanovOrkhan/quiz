import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from "./AdminHeader.module.css"
 const AdminHeader = () => {
  
  return (
    <>
      <ul>
        <li><NavLink className={({isActive})=> ( isActive ? styles.active : "")} to={"/admin/dashboard"}>Dashboard</NavLink></li>
        <li><NavLink className={({isActive})=> ( isActive ? styles.active : "")} to={"/admin/addQuestions"}>Add Questions</NavLink></li>
        <li><NavLink className={({isActive})=> ( isActive ? styles.active : "")} to={"/admin/adminQuestions"}>Admin Questions</NavLink></li>
      </ul>
    </>
  )
}

export default AdminHeader
