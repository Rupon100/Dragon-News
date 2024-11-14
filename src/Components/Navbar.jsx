import { Link, NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    
    const { user, logOutUser } = useContext(AuthContext);


    return (
        <div className="flex justify-between items-center">
            <div>
                <h2>{user?.email}</h2>
            </div>
            <div className="space-x-4"> 
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/career'>Career</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            <div className="flex items-center gap-2">
                <div className="">
                  {
                    user && user?.email ? <div><img className="w-12 h-12 object-cover rounded-full" src={user.photoURL} alt="" /></div> : <img src={userIcon} alt="userIcon" />
                  }
                </div>
                {
                    user 
                    ?  <button onClick={logOutUser} className="btn btn-neutral">Log out</button>  
                    :  <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;