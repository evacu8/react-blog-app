import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Container } from "react-bootstrap";
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({ title, author, publishedDate, shortDescription, content}));
    navigate("/");
  };

  return (
    <Container className='col-lg-8'>
      <h1>Add post</h1>
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
          <textarea className="form-control" id="MainContent" rows="10" placeholder="Enter main content here" value={content} onChange={e => setContent(e.target.value)}></textarea>
        </div>
      </form>
      <button type="button" className='btn btn-primary' onClick={handleSubmit}>Add post</button>
    </Container>
  );

};

export default AddPostForm;