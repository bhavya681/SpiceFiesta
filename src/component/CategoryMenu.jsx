import React, { useEffect, useState } from 'react';
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/Categoryslice';

const CategoryMenu = () => {

    const dispatch = useDispatch();

    const selectedCategory = useSelector((state) => state.category.category);

    const [categories, setCategories] = useState([]);

    const listUniqueCategories = () => {
        const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
        setCategories(uniqueCategories);
    };

    useEffect(() => {
        listUniqueCategories();
    }, [])

    return (
        <div className='ml-6'>
            <h3 className='text-xl font-semibold'>Find the best food</h3>
            <div className='my-5 flex space-x-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
                <button onClick={() => { dispatch(setCategory("ALL")) }} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === "ALL" && "bg-green-500 text-white"}`}>All</button>
                {
                    categories.map((category, index) => (
                        <>
                            <button key={index} onClick={() => { dispatch(setCategory(category)) }} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === category && "bg-green-500 text-white"}`}>{category}</button>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryMenu