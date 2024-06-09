import { useEffect } from "react";
import { useState } from "react";


const UseState = () => {
    const person=[
      {
        id: 1,
        name: "Alice Johnson",
        age: 28,
      },
      {
        id: 2,
        name: "Bob Smith",
        age: 34,
      },
      {
        id: 3,
        name: "Charlie Brown",
        age: 22,
      },
      {
        id: 4,
        name: "Diana Prince",
        age: 30,
      },
      {
        id: 5,
        name: "Ethan Hunt",
        age: 35,
      },
      {
        id: 6,
        name: "Fiona Gallagher",
        age: 27,
      },
      {
        id: 7,
        name: "George Michael",
        age: 25,
      },
      {
        id: 8,
        name: "Hannah Baker",
        age: 24,
      },
      {
        id: 9,
        name: "Ian Malcolm",
        age: 39,
      },
      {
        id: 10,
        name: "Jane Eyre",
        age: 31,
      },
    ];

    const [data,setData]=useState(person)

    const handleRemove=(id)=>{
        const removeData = data.filter((item) => item.id != id);
        setData(removeData)
    }

    useEffect(()=>{
        console.log("UseEffect is Regenerating Data")
    },[])

    // here [] is used so that it render 1 time after run not every single click 

    return (
      <div>
        {data.map((demo) => (
          <div className="grid grid-cols-3 m-6 text-center" key={demo.id}>
            <h1>{demo.name}</h1>
            <button onClick={()=>handleRemove(demo.id)} className="btn btn-warning">Remove</button>
          </div>
        ))}
      </div>
    );
};

export default UseState;