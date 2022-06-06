import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product/Product";
import styles from "./Products.module.css";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/products").then((r) => {
      setData(r.data);
    });
  }, []);

  console.log(data);

  return (
    <div className={styles.container}>
      {data.map((item) => {
        return <Product key={item.id} data={item} />;
      })}
    </div>
  );
};

export default Products;
