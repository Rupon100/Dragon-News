 
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

 

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    // console.log(categories.data)
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(response => response.json())
        .then(data => setCategories(data.data.news_category));
    } ,[])

    return (
        <div className="space-y-2">
            <h2 className="font-semibold">All Category</h2>
            <div className="flex flex-col gap-2">
                {
                    categories.map(category => 
                      <NavLink
                      to={`/category/${category.category_id}`}
                    //   className={`p-2 border rounded text-gray-500 hover:bg-base-300 hover:text-gray-800 transition-all ${'isActive' ? 'bg-base-300' : ''}`}
                      className={({ isActive }) => 
                        `p-2 border rounded text-gray-500 hover:bg-base-300 hover:text-gray-800 transition-all ${isActive ? 'bg-base-300 text-gray-800' : ''}`
                      }
                      key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;