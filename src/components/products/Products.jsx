
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";


const Products = () => {
    const {products}=useLoaderData();
    console.log(products)

    // const [product,setProduct]=useState([]);
    // useEffect(()=>{
    //     fetch("https://dummyjson.com/products")
    //     .then(res=>res.json()).then(data=>setProduct(data));
    // },[]);
    // console.log(product)
    return (
        <div className="grid grid-cols-3 gap-3 h-64">
            {products?.map(product=> <ProductCard key={product.id} product={product}></ProductCard>)}
        </div>
    );
};

export default Products;