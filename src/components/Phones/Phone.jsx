import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Phone = () => {
    const {id}=useParams()
    
    const [data,setdata]=useState({})
    const { image, phone_name, brand_name, price } = data || {};
    const phones=useLoaderData();

    const handleClick=()=>{
        const cart=[];

        const cart_item=JSON.parse(localStorage.getItem("cart"))
        if(!cart_item){
            cart.push(data)
            localStorage.setItem("cart",JSON.stringify(cart))
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your product has been saved to cart",
              showConfirmButton: false,
              timer: 2500,
            });
        }
        else{

            const check=cart_item.find(phone=> phone.id === id)
            if(!check){
                cart.push(...cart_item, data);
                localStorage.setItem("cart", JSON.stringify(cart));
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Your product has been saved to cart",
                  showConfirmButton: false,
                  timer: 2500,
                });
            }
            else{
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                  footer: '<a href="#">Why do I have this issue?</a>',
                });
            }
            
        }
    }
    

    useEffect(()=>{
        const findPhone=phones.find(phone=>phone.id==id)
        setdata(findPhone)
    },[id,phones])
    return (
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{phone_name}</h2>
            <p>{price}</p>
            <button className="btn btn-outline">{brand_name}</button>
            
              <button onClick={()=>handleClick()} className="btn btn-primary">Add to Cart</button>
            
          </div>
        </div>
      </div>
    );
};

export default Phone;