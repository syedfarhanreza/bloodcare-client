import React, { useState } from 'react';
import ManageBlogsModal from './ManageBlogsModal';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import separator from '../../../assets/separator/separator.png';

const ManageBlogs = () => {
    const [deletingBlog, setDeletingBlog] = useState(null);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const closeModal = () => {
        setDeletingBlog(null);
    }

    const { data: blogs, isLoading, refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/blogs', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeleteBlog = blog => {
        fetch(`http://localhost:5000/blogs/${blog._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Blog: ${blog.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className='text-3xl my-3 text-center font-bold text-red-600'>Manage Blogs</h2>
            <img className='m-auto' src={separator} alt="separator" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {blogs?.map((blog) => (
                    <div key={blog._id} className="bg-white rounded-lg shadow-lg">
                        <img src={blog.image} alt={blog.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{blog.title}</h3>
                            <div className='h-[150px]'>
                            <p className="text-gray-600 line-clamp-6">{blog.details}</p>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <label
                                    htmlFor="user-modal"
                                    className="btn btn-outline btn-info btn-xs"
                                    onClick={() => {
                                        setSelectedBlog(blog);
                                    }}
                                >Details</label>
                                <label
                                    onClick={() => setDeletingBlog(blog)}
                                    className="btn btn-ghost btn-xs hover:btn-error"
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {deletingBlog && (
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingBlog.title}, it cannot be undone.`}
                    successAction={handleDeleteBlog}
                    successButtonName="Delete"
                    modalData={deletingBlog}
                    closeModal={closeModal}
                />
            )}
            {selectedBlog && <ManageBlogsModal
                selectedBlog={selectedBlog}
            ></ManageBlogsModal>}
        </div>
    );
};

export default ManageBlogs;
