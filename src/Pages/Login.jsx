import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

 
const Login = () => {

    const { loginUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const handleLogin = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        const email = data.get("email");
        const pass = data.get("pass");
        console.log(email, pass);

        loginUser(email, pass)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
            navigate(location?.state ? location.state : '/');            
        })
        .catch(err => {
            setError({...error, login: err.code})
        })
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
               <h2 className="text-3xl font-semibold text-center  p-4">Login Your Account</h2>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="pass" placeholder="password" className="input input-bordered" required />
                   {
                    error.login && (
                        <label className="label text-sm text-red-600">
                            { error.login }
                        </label>
                    )
                   }
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-neutral ">Login</button>
                </div>
              </form>
              <p className="text-center font-semibold">
                Don't have an Account?
                <Link to='/auth/register' className="text-red-500 px-1">Register</Link>
              </p>
            </div>
        </div>
    );
};

export default Login;