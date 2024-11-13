import axios from "axios";
import { useEffect, useState } from "react";

 

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios('https://openapi.programming-hero.com/api/news/categories')
        .then(result => {
            setCategories(result.data.data.news_category)
        })
    } ,[])

    return (
        <div className="space-y-2">
            <h2 className="font-semibold">All Category</h2>
            <div className="flex flex-col gap-2">
                {
                    categories.map(category => 
                      <button
                      className="p-2 border rounded text-gray-500 hover:bg-base-300 hover:text-gray-800 transition-all"
                      key={category.category_id}>{category.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;