import { Link } from "react-router-dom";


const ProductCard = ({product}) => {
    const {id,title,description,images}=product
    const handleCart=(id)=>{
        console.log(id)
    }
    return (
      <div>
        <Link to={`/product/${id}`}>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                className="p-8 rounded-t-lg h-52 w-full"
                src={images[0]}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleCart(id)}
                  className="btn btn-primary"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default ProductCard;