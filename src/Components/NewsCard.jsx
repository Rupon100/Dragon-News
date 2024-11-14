import ReactStars from "react-rating-stars-component";
import { MdMarkAsUnread } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news = {} }) => {
    const { details,  _id, image_url, published_date, thumbnail_url, title, total_view, author, rating  } = news;

    return (
        <div className="border m-2 space-y-2">
            <div className="flex items-center justify-between bg-gray-300 p-2">
               <div className="flex gap-2">
                    <div>
                         <img className="w-12 rounded-full" src={author.img} alt="author" />
                    </div>
                    <div>
                        <h2 className="font-semibold">{author.name}</h2>
                        <p>{author.published_date}</p>
                    </div>
               </div>
               <div className="flex gap-2 *:hover:cursor-pointer">
                   <MdMarkAsUnread />
                   <CiShare2 />
               </div>
            </div>
            <div className="p-2 space-y-2">
                <div className="space-y-1">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <img className="w-full object-cover" src={thumbnail_url} alt="thumbnail" />
                    <p className="text-gray-800">
                        {details.slice(0,150)}...{" "}
                        <Link to={`/news/${_id}`}>Read More</Link>
                    </p>
                </div>
                <hr />
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <ReactStars
                          count={rating.number}
                          isHalf={true}
                          value={rating.number}
                          size={24}
                          activeColor="#ffd700"
                        />
                        {rating.badge}
                    </div>
                    <div className="flex items-center gap-2">
                       <FaEye />
                       {total_view}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;