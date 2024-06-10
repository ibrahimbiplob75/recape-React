
import { useLoaderData } from "react-router-dom";


const Products = () => {
    const products=useLoaderData();
    console.log(products.products)

    // const [product,setProduct]=useState([]);
    // useEffect(()=>{
    //     fetch("https://dummyjson.com/products")
    //     .then(res=>res.json()).then(data=>setProduct(data));
    // },[]);
    // console.log(product)
    return (
        <div>
            <h1>products</h1>
        </div>
    );
};

export default Products;