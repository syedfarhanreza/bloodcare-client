import React, { useState } from 'react';
import ManageBlogsModal from './ManageBlogsModal';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
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
                    toast.success(`Blog: ${blog.title} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    if (blogs) {
        blogs.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
      }

    return (
        <div className="container mx-auto p-4">
            <h2 className='text-3xl my-3 text-center font-bold text-red-600'>Manage Blogs</h2>
            <img className='m-auto' src={separator} alt="separator" />
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Blog Title</th>
                            <th>Details</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs?.map((blog, i) => <tr key={blog._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={blog.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{blog.title}</div>
                                        </div>
                                    </div>
                                </td>
                                <th>
                                    <label
                                        htmlFor="user-modal"
                                        className="btn btn-info btn-outline  btn-xs"
                                        onClick={() => {
                                            setSelectedBlog(blog);
                                        }}
                                    >Details</label>
                                </th>
                                <th>
                                    <label
                                        className="btn btn-outline btn-primary btn-xs font-bold"

                                    >Edit</label>
                                </th>
                                <th>
                                    <label onClick={() => setDeletingBlog(blog)} className="btn btn-outline btn-error btn-xs font-bold" htmlFor="confirmation-modal">
                                        Delete
                                    </label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
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
                refetch={refetch}
                selectedBlog={selectedBlog}
            ></ManageBlogsModal>}
        </div>
    );
};

export default ManageBlogs;
