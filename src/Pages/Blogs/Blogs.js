import React from 'react';
import { useQuery } from 'react-query';

const Blogs = () => {
    const { data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: () => fetch('http://localhost:5000/blogs')
            .then(res => res.json())
    });
    return (
        <div>
            
        </div>
    );
};

export default Blogs;