
import Grandparent from "./Grandparent";



const Header = () => {
    return (
        <div className="m-20">
            <h1 className="text-3xl ">Prop Dealing From Upper level to lower level</h1>
            <Grandparent></Grandparent>
            
        </div>
    );
};

export default Header;