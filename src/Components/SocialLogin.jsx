import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold py-2">Login With</h2>
            <div className="space-y-2 *:w-full">
                <button className="btn text-[#316FF6]">
                  <FaGoogle /> Login With Google
                </button>
                <button className="btn">
                  <FaGithub /> Login With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;