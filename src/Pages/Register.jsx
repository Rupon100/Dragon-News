import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

 

const Register = () => {

    const { user, setUser, createNewUSer } = useContext(AuthContext);
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // const email = e.target.email.value;
        const formData = new FormData(e.target)
        const name = formData.get("name");
        if(name.length < 4){
            setError({...error, name: "must be the 4 chracter!"});
            return;
        }
        const photo = formData.get("photo");
        const email = formData.get("email");
        if(!emailPattern.test(email)){
            setError({...error, email: "Please give a valid email!"});
            return;
        }
        const pass = formData.get("pass");
        if(pass.length < 6){
            setError({...error, pass:"set at least 6 characters"});
            return;
        }
        console.log({name, photo,email,pass});


        createNewUSer(email, pass)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => {
            console.log("ERROR", error.message);
        })
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
               <h2 className="text-3xl font-semibold text-center  p-4">Register Now!</h2>
              <form onSubmit={handleSubmit} className="card-body">

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>

                {
                    error.name && (
                        <label className="label text-sm text-red-600">
                            <span className="text-red-600">{error.name}</span>
                        </label>
                    )
                }

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>

                {
                    error.email && (
                        <label className="label text-sm text-red-600">
                            <span className="text-red-600">{error.email}</span>
                        </label>
                    )
                }

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="pass" placeholder="password" className="input input-bordered" required />

                  {
                    error.pass && (
                        <label className="label text-sm text-red-600">
                            <span className="text-red-600">{error.pass}</span>
                        </label>
                    )
                 }

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>

                

                <div className="form-control mt-6">
                  <button className="btn btn-neutral ">Register</button>
                </div>
              </form>
              <p className="text-center font-semibold">
                Already have an Account?
                <Link to='/auth/login' className="text-red-500 px-1">Login</Link>
              </p>
            </div>
       </div>
    );
};

export default Register;