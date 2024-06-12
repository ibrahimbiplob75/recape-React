import { useEffect, useState } from "react";
import MyCard from "./MyCard";


const MyCart = () => {
    const [cartItem,setCartItem]=useState()
    const [nodata,setNodata]=useState()

    const [see,setSee]=useState(false)

    useEffect(()=>{
        const cart_item = JSON.parse(localStorage.getItem("cart"));
        if(cart_item){
            setCartItem(cart_item)
        }
        else{
            setNodata("No Data Found")
        }
    },[])
    const handleRemove = () => {
      localStorage.clear();
      setCartItem([]);
      setNodata("No Data Found");
    };
    console.log(cartItem)
    return (
      <div>
        {nodata ? (
          <p>{nodata}</p>
        ) : (
          <div>
            {cartItem?.length > 0 && (
              <div>
                <button
                  onClick={handleRemove}
                  className="px-5 w-52 h-12 bg-green-200 block mx-auto"
                >
                  Deleted Carts item
                </button>

                {/* <h1>Total price : {totalPrice}</h1> */}
              </div>
            )}
            <div className="grid grid-cols-3 gap-7">
                {
                    see ?
                    cartItem?.map((item) => (
                <MyCard key={item.id} phone={item}></MyCard>
              ))
              :
              cartItem?.slice(0,4).map((item) => (
                <MyCard key={item.id} phone={item}></MyCard>
              ))
                
            }

              
            </div>
          </div>
        )}
        <button
          onClick={() => setSee(!see)}
          className="px-5 w-52 h-12 bg-green-200 block mx-auto"
        >{
            see ? "see less":"see more..."
        }
          
        </button>
      </div>
    );
};

export default MyCart;