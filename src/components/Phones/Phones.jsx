import { useLoaderData } from "react-router-dom";
import PhoneCard from "./PhoneCard";


const Phones = () => {
    const phones=useLoaderData()
    console.log(phones)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {phones.map(phone=><PhoneCard key={phone.id} phone={phone}></PhoneCard>)}
        </div>
    );
};

export default Phones;