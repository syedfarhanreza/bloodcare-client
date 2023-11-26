import React from 'react';
import BlogContent from '../DashBoard/ManageBlogs/BlogContent';

const BlogsDetailsModal = ({ selectedBlog }) => {
    const { title, details, image, category, author, dateTime } = selectedBlog;

    return (
        <>
            <input type="checkbox" id="user-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-11/12 max-w-5xl">
                    <label htmlFor="user-modal" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                    <img src={image} alt={title} className="w-full h-[500px] object-cover rounded-t-lg mt-5" />
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-1 pb-3">{title}</h3>
                        <div className='flex justify-between bg-slate-200 px-3 mb-3'>
                            <span>Category: <span className='capitalize font-bold'> {category}</span></span>
                            <span>Author: <span className='capitalize italic font-bold'> {author}</span></span>
                            <span>Posted on: <span className='capitalize italic font-bold'> {dateTime}</span></span>
                        </div>
                        <div className='h-auto pb-3'>
                            <div>
                                <BlogContent content={details} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogsDetailsModal;