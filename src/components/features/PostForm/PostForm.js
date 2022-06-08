import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Container } from "react-bootstrap";

const PostForm = ({ action, actionText, ...props}) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Container className='col-lg-8'>
      <h1>{actionText}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" placeholder="Enter Title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" className="form-control" id="author" placeholder="Enter Author" value={author} onChange={e => setAuthor(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="published" className="form-label">Published</label>
          <input type="date" className="form-control" id="published" placeholder="Published" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="shortDescription" className="form-label">Short description</label>
          <textarea className="form-control" id="shortDescription" rows="3" placeholder="Enter short description here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="MainContent" className="form-label">Main content</label>
          <ReactQuill theme="snow" id="MainContent" value={content} onChange={setContent} />
        </div>
      </form>
      <button type="button" className='btn btn-primary' onClick={handleSubmit}>{actionText}</button>
    </Container>
  );

};

export default PostForm;