import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from "./AdminHeader.module.css"
import { useAuth } from '../../../Services/Context/Context';
const AdminHeader = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <ul>
        <li><NavLink className={({isActive})=> ( isActive ? styles.active : "")} to={"/admin/dashboard"}>Dashboard</NavLink></li>
        <li><NavLink className={({isActive})=> ( isActive ? styles.active : "")} to={"/admin/addQuestions"}>Add Questions</NavLink></li>
        <button onClick={() => {
                  if (window.confirm("are you sure to log out?")) {
                    logout();
                    navigate("/login");
                  }
                }}>Logout</button>
      </ul>
    </>
  )
}

export default AdminHeader
