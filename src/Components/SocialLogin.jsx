import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {

    const { setUser, gitHubLogin, facebookLogin } = useContext(AuthContext);

    const handleGithubLogin = () => {
      gitHubLogin()
      .then(result => {
        setUser(result.user);
        console.log(result.user)
      })
    }

    const handleFacebookLogin = () => {
      facebookLogin()
      .then(result => {
        setUser(result.user);
      })
    }

    return (
        <div>
            <h2 className="font-semibold py-2">Login With</h2>
            <div className="space-y-2 *:w-full">
                <button onClick={handleFacebookLogin} className="btn text-[#316FF6]">
                  <FaGoogle /> Login With Google
                </button>
                <button onClick={handleGithubLogin} className="btn">
                  <FaGithub /> Login With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;