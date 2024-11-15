import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold py-2">Find Us On</h2>
            <div className="join join-vertical flex *:bg-base-100">
              <button className="btn join-item justify-start">
                <a className="flex gap-2" href="https://www.facebook.com/fardiislam.rupon">
                   <FaFacebook></FaFacebook> Facebook
                </a>
              </button>
              <button className="btn join-item justify-start">
                <a className="flex gap-2" href="https://x.com/FardiRupon81077">
                  <FaTwitter></FaTwitter> Twitter
                </a>
              </button>
              <button className="btn join-item justify-start">
                <a className="flex gap-2" href="https://www.instagram.com/fardiislam/">
                  <FaInstagram></FaInstagram> Instagram
                </a>
              </button>
            </div>
        </div>
    );
};

export default FindUs;