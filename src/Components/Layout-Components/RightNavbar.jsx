import FindUs from "../FindUs";
import Qzone from "../Qzone";
import SocialLogin from "../SocialLogin";
import adspbg from '../../assets/bg.png'

const RightNavbar = () => {
    return (
        <div className="space-y-4">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
            <section>
                <img src={adspbg} alt="adspng" />
            </section>
        </div>
    );
};

export default RightNavbar;