import { useState,useEffect } from "react";
function Products(){
    const[products,setProducts] = useState([]);
    useEffect(() => {
        fetch(
            "http://localhost:5000/products",
            {
                headers: {
                    Authorization:
                    "Bearer " +
                    localStorage.getItem("token"),
                },
            }
        )
        .then((res) => res.json())
        .then((data) => {
            if(Array.isArray(data)){
                setProducts(data);
            }
            else{
                console.log(data.message);
            }
        });
    }, []);
    return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}
export default Products;