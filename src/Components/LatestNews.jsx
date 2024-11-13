import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex justify-center items-center gap-2 p-2 bg-base-200">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true} speed={80} className="space-x-8">
               <Link to='/news' className="flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos repellendus. Vel.</Link>
               <Link to='/news' className="flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos repellendus. Vel.</Link>
               <Link to='/news' className="flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos repellendus. Vel.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;