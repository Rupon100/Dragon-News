import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex justify-center items-center gap-2 p-2 bg-base-200">
            <p className="bg-[#D72050] text-base-100 px-5 py-1">Latest</p>
            <Marquee pauseOnHover={true} speed={80} className="space-x-8">
               <Link to='/news/latest' className="flex-grow">Customs in Chattogram will destroy four lakh kilograms of imported fruits worth Tk 70 lakh due to poor auction turnout</Link>
               <Link to='/news/latest' className="flex-grow">Trump challenges U.S. courts over gag orders, calling them a violation of his free speechntertainment</Link>
               <Link to='/news/latest' className="flex-grow">Bollywood stars Deepika Padukone and Ranveer Singh celebrate six years of marriage, sharing heartwarming memories</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;