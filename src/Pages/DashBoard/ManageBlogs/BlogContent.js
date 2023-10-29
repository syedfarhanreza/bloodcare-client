import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogContent = ({ content }) => {
    return (
        <ReactQuill className="react-quill-no-resize react-quill-no-border" value={content} readOnly theme="snow" modules={{ toolbar: false }} />
    );
};

export default BlogContent;