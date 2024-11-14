import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

 
const Login = () => {

    const { loginUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        const email = data.get("email");
        const pass = data.get("pass");
        console.log(email, pass);

        loginUser(email, pass)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message)
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
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