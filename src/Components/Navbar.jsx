import { Link, NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    
    const { user, logOutUser } = useContext(AuthContext);
    // console.log(user)


    return (
        <div className="flex justify-between items-center">
            <div>
               {user &&  <h2 className="font-semibold p-2 border rounded">{user?.email || user?.displayName}</h2>}
            </div>
            <div className="space-x-4"> 
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/career'>Career</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            <div className="flex items-center gap-2">
                <div className="">
                  {
                    user ? <div><img className="w-12 h-12 object-cover rounded-full" src={user.photoURL} alt="" /></div> : <img src={userIcon} alt="userIcon" />
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