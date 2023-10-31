import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './custom-quill-styles.css';
import separator from '../../../assets/separator/separator.png';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const PostBlog = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [blogContent, setBlogContent] = useState('');
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const quillModules = {
        toolbar: {
            container: [
                [{ 'font': [] }, { 'size': [] }],
                [{ 'color': [] }, { 'background': [] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['link'],
                ['align', 'blockquote'],
            ],
        },
    };

    const handlePostBlog = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    const currentDate = new Date();
                    const formattedDate = format(currentDate, 'yyyy-MM-dd HH:mm:ss');
                    // console.log(imgData.data.url);
                    const blog = {
                        title: data.title,
                        category: data.category,
                        author: data.author,
                        details: blogContent,
                        image: imgData.data.url,
                        dateTime: formattedDate,
                    };
                    fetch('http://localhost:5000/blogs', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`,
                        },
                        body: JSON.stringify(blog),
                    })
                        .then((res) => res.json())
                        .then((result) => {
                            console.log(result);
                            toast.success(`${data.title} is added successfully`);
                            navigate('/dashboard/manageBlogs');
                        });
                }
            });
    };

    return (
        <div className='flex justify-center items-center mb-7'>
            <div className='w-full m-10 bg-slate-300 p-7 shadow-xl rounded-xl '>
                <h2 className="text-3xl text-center font-bold">Post Blog</h2>
                <img className='m-auto' src={separator} alt="separator" />
                <form onSubmit={handleSubmit(handlePostBlog)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Blog Title</span>
                        </label>
                        <input type="text" {...register("title", {
                            required: "Blog Title is Required"
                        })} className="input input-bordered w-full" />
                        {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                    </div>
                    <div className='flex justify-between gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Category</span>
                            </label>
                            <input type="text" {...register("category", {
                                required: "Category is Required"
                            })} className="input input-bordered w-full" />
                            {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Author</span>
                            </label>
                            <input type="text" {...register("author", {
                                required: "Author is Required"
                            })} className="input input-bordered w-full" />
                            {errors.author && <p className='text-red-500'>{errors.author.message}</p>}
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Blog Details</span>
                        </label>
                        <Quill
                            value={blogContent}
                            onChange={setBlogContent}
                            modules={quillModules}
                        />
                        {errors.details && <p className="text-red-500">{errors.details.message}</p>}
                    </div>
                    <div className="form-control w-full mb-3">
                        <label className="label">
                            <span className="label-text font-bold">Upload Image</span>
                        </label>
                        <input type="file" {...register("image", {
                            required: "Image is Required"
                        })} className="w-full" />
                        {errors.image && <p className='text-red-600' role="alert">{errors.image?.message}</p>}
                    </div>
                    <div className='flex justify-center'>
                        <input className='btn btn-accent w-1/5 mt-4 mb-3' value="Post Blog" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostBlog;
