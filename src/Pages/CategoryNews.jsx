import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

 
const CategoryNews = () => {
    const { data: news } = useLoaderData();
    console.log(news)
    return (
        <div className="space-y-2">
            <h2 className="font-semibold py-2">Dragon News Home</h2>
            <div>
                {
                    news && news.length > 0 ? (news.map((singleNews) =>  <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)) : <h1 className="text-red-400 font-semibold">No Data Available in this category :)</h1>
                    // news.map((singleNews) =>  <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;