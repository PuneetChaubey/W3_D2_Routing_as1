import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Style.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>Navbar
        <Link className={styles.Link} to="/" >Home</Link>
        <Link className={styles.Link}to='/products'>Products</Link>
        <Link className={styles.Link} to="/product">Product</Link>
    </div>
  )
}

export default Navbar