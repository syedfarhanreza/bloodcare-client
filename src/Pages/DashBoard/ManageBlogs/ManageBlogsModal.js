import React from 'react';
import BlogContent from './BlogContent';

const ManageBlogsModal = ({ selectedBlog }) => {

    const { title, details, image } = selectedBlog;

    return (
        <>
            <input type="checkbox" id="user-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-11/12 max-w-5xl">
                    <label htmlFor="user-modal" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-5">
                        <figure><img className='w-full h-[400px]' src={image} alt="HospitalImage" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <div className='h-auto'>
                                <BlogContent className='blog-content-no-border' content={details} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageBlogsModal;