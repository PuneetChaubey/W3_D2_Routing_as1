import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./Style.module.css"
const Product = () => {
const {id}= useParams();

const [product, setProduct] = useState([]);

useEffect(() => {
  
    const fetchData =async ()=>{
       
        let res = await fetch(`http://localhost:8080/data/${id}`)
        let prodDetails = await res.json();
        setProduct(prodDetails);
    }

  if(id){
    fetchData()
  }

  
}, [id])



  return (
   <table className={styles.table}>
       <thead>
           <tr className={styles.tr}>
               <th>Product Name</th>
               <th>Product Price</th>
           </tr>
       </thead>
       <tbody>
           <tr className={styles.tr}>
               <td>{product.name}</td>
               <td>{product.price}</td>
           </tr>
       </tbody>
   </table>
  )
}

export default Product