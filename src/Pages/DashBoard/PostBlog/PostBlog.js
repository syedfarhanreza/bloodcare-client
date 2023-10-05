import React from 'react';
import { useForm } from 'react-hook-form';
import separator from '../../../assets/separator/separator.png'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PostBlog = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handlePostBlog = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
           if(imgData.success){
            console.log(imgData.data.url); 
            const blog = {
                name: data.name,
                details: data.details,
                image:  imgData.data.url
            }
            fetch('http://localhost:5000/blogs', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(blog)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${data.name} is added successfully`);
                navigate('/dashboard/manageBlogs')
            })
           }
        })  
    }

    return (
        <div className='h-[700px] w= flex justify-center items-center mb-7'>
        <div className='w-3/5  bg-slate-300 p-7 shadow-xl rounded-xl '>
            <h2 className="text-3xl text-center font-bold ">Post Blog</h2>
            <img className='m-auto' src={separator} alt="separator" />
            <form onSubmit={handleSubmit(handlePostBlog)}>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text font-bold">Blog Title</span></label>
                    <input type="text" {...register("title", {
                        required: "Blog Title is Required"
                    })} className="input input-bordered w-full" />
                    {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text font-bold">Blog Details</span></label>
                    <textarea type="text" {...register("details", {
                        required: "Blog details is Required"
                    })} className="textarea textarea-bordered w-full" />
                    {errors.details && <p className='text-red-500'>{errors.details.message}</p>}
                </div>
                <div className="form-control w-full mb-3">
                    <label className="label"> <span className="label-text font-bold">Upload Image</span></label>
                    <input type="file" {...register("image", {
                        required: "Image is Required"
                    })} className="w-full" />
                    {errors.image && <p className='text-red-600' role="alert">{errors.image?.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4 mb-3' value="Post Blog" type="submit" />
            </form>
        </div>
    </div>
    );
};

export default PostBlog;