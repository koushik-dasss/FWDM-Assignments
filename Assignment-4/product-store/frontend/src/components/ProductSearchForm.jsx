import React,{ useState } from "react";
import { useQuery,QueryClient,QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function ProductSearch(){
    const[productName,setProductName] = useState("");
    const[category,setCategory] = useState("");
    const fetchProducts = async() => {
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );
        return response.json();
    };
    const{ data,isLoading,error } = useQuery({
        queryKey:["products"],
        queryFn:fetchProducts,
    });
    const filteredProducts = data?.filter((product) => {
        return(
            product.title.toLowerCase().includes(productName.toLowerCase()) &&
            product.category.toLowerCase().includes(category.toLowerCase())
        );
    });
    return (
    <div>
      <h2>Product Search</h2>
      <input
        type="text"
        placeholder="Search Product"
        value={productName}
        onChange={(e) =>
          setProductName(e.target.value)
        }
      />
      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="">All</option>
        <option value="electronics">
          Electronics
        </option>
        <option value="jewelery">
          Jewelery
        </option>
      </select>
      <button>
        Search
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading products</p>}
      {filteredProducts?.map((product) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
}
function ProductSearchForm() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductSearch />
    </QueryClientProvider>
  );
}
export default ProductSearchForm;