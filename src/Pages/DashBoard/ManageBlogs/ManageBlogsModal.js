import React from 'react';

const ManageBlogsModal = ({ selectedBlog }) => {

    const { title, details, image } = selectedBlog;

    return (
        <>
            <input type="checkbox" id="user-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="user-modal" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-5">
                        <figure><img className='w-full h-[300px]' src={image} alt="HospitalImage" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                        </div>
                        <div className="my-4 flex justify-between items-center px-5">
                            <label
                                htmlFor="user-modal"
                                className="btn btn-outline btn-primary btn-sm font-bold"
                                
                            >Edit</label>
                            <label
                                className="btn btn-outline btn-error btn-sm"
                            >
                                Delete
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageBlogsModal;