import Children from "./Children";


const Parent = ({number,setNumber}) => {
    console.log(number,setNumber)
    const addNumber=()=>{
        setNumber(number + 1)
    }
    const removeNumber = () => {
        setNumber(number -1 )
    };
    return (
      <div>
        <h1>Parent : {number}</h1>
        <button className="btn btn-success" onClick={addNumber}>
          Add
        </button>
        <button className="btn btn-warning" onClick={removeNumber}>
          Remove
        </button>
        <Children number={number}></Children>
      </div>
    );
};



export default Parent;