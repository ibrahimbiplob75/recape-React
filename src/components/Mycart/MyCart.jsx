import { useEffect, useState } from "react";
import MyCard from "./MyCard";


const MyCart = () => {
    const [cartItem,setCartItem]=useState()
    const [nodata,setNodata]=useState()

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
                  className="px-5 bg-green-200 block mx-auto"
                >
                  Deleted All favorites
                </button>

                {/* <h1>Total price : {totalPrice}</h1> */}
              </div>
            )}
            <div className="grid grid-cols-3 gap-7">
              {cartItem?.map((item) => (
                <MyCard key={item.id} phone={item}></MyCard>
              ))}
            </div>
          </div>
        )}
      </div>
    );
};

export default MyCart;