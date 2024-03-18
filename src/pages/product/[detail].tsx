// import * as React from "react"
// import { Link } from "gatsby"
// import { useEffect } from "react";
// import { getProductById } from "../../api";

// function ProductCatchAll({ params }) {
  
//   useEffect (()=>{
//     const fetchProductDetail = async getProductById() => {
//       setIsLoading(true);
//       try {
//         const response = await fetchProductById(productId);
//         setProduct(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         setError("Failed to fetch product details");
//         setIsLoading(false);
//       }
//     };

//     fetchProductDetail();
//   })
  
//   console.log(params)
  
//   return (
//     <div className="wrapper">
//       <header>
//         <Link to="/">Go back to "Home"</Link>
//       </header>
//       <main>
//         <h1>Couldn't find product</h1>
//         <p>We couldn't locate the product {params.detail}</p>
//       </main>
//     </div>
//   )
// }

// export default ProductCatchAll