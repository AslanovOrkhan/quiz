import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from  "./Header.module.css";
const Header = () => {
  return (
    <>
    <ul>
        <li><NavLink className={({isActive})=> (isActive ? styles.active : "")} to={"/"}>Home</NavLink></li>
        <li><NavLink className={({isActive})=> (isActive ? styles.active : "")} to={"/favorites"}>Favorites</NavLink></li>
        <li><NavLink className={({isActive})=> (isActive ? styles.active : "")} to={"/questions"}>Questions</NavLink></li>
        <li><NavLink to={"/login"}>Admin</NavLink></li>
    </ul>
    </>
  )
}

export default Header
