import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BlogContent from '../DashBoard/ManageBlogs/BlogContent';
import separator from '../../assets/separator/separator.png'
const Blogs = () => {
    const { data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: () => fetch('http://localhost:5000/blogs')
            .then(res => res.json())
    });

    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(blogs?.map((blog) => blog.category))];

    const filteredBlogs = selectedCategory === 'All'
        ? blogs
        : blogs?.filter((blog) => blog.category === selectedCategory);

    filteredBlogs?.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='flex'>
            <div className="w-1/6 bg-gray-300 text-center ">
                <div className='mx-5'>
                    <h1 className='text-xl font-bold my-2 '>Categories</h1>
                    <ul className='flex flex-col'>
                        {categories?.map((category) => (
                            <li
                                className={`btn btn-ghost btn-sm ${selectedCategory === category ? 'btn-active' : ''}`}
                                key={category}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 w-4/5 mx-auto mt-3 ">
                <h1 className='text-4xl font-bold text-center text-red-600'>Blogs</h1>
                <img className='m-auto' src={separator} alt="separator" />
                <div className="grid grid-cols-1 gap-10 mb-10">
                    {filteredBlogs?.map((blog) => (
                        <div key={blog._id} className="bg-white rounded-lg shadow-lg">
                            <img src={blog.image} alt={blog.name} className="w-full h-[480px] object-cover rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">{blog.title}</h3>
                                <div className='flex justify-between bg-slate-200 px-3'>
                                    <span>Category: <span className='capitalize font-bold'> {blog.category}</span></span>
                                    <span>Author: <span className='capitalize italic font-bold'> {blog.author}</span></span>
                                    <span>Posted on {blog.dateTime}</span>

                                </div>
                                <div className='h-auto'>
                                    <BlogContent className='blog-content-no-border' content={blog.details} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
