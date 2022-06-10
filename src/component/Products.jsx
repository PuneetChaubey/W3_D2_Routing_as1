import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./Style.module.css"

const Products = () => {

    const [products, setProducts] = useState([]);

  useEffect(() => {
   
    const fetchData =async ()=>{

   let res = await fetch("http://localhost:8080/data")
   let prodDetails = await res.json();
  //console.log(prodDetails)
  setProducts(prodDetails);

    }

    fetchData();

  }, [])
  

  return (
  <>
  <div><div><h3>Products Details</h3></div>
   <table className={styles.table}>
   <thead className={styles.thead}>
       <tr >
           <td>Product Name</td>
           <td>Product Price</td>
           <td>Link For More Details</td>
       </tr>
   </thead>
   <tbody>
   {
     products.map((p)=>{
   
   
       return <tr className={styles.tr}>
       <th>{p.name}</th>
       <th>{p.price}</th>
       <th><div key={p.id}><Link to={`/products/${p.id}`} > More Details</Link></div></th>
        </tr>
    

     })
    }
   </tbody>
   </table>
    
    </div>
  
  
  </>
    
  )
}

export default Products