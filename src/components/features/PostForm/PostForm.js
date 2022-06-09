import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import CategorySelect from "../CategorySelect/CategorySelect";

const PostForm = ({ action, actionText, ...props}) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };

  return (
    <Container className='col-lg-8'>
      <h1>{actionText}</h1>
      <form onSubmit={validate(handleSubmit)}>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input 
            {...register(
              "title", 
              { 
                required: true,
                minLength: 3, 
              }
            )}
            type="text" 
            className="form-control" 
            id="title" 
            placeholder="Enter Title" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
          />
          {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            {...register(
              "author", 
              { 
                required: true,
                minLength: 3, 
              }
            )}
            type="text" 
            className="form-control" 
            id="author" 
            placeholder="Enter Author" 
            value={author} 
            onChange={e => setAuthor(e.target.value)} 
          />
          {errors.author && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="published" className="form-label">Published</label>
          <DatePicker id="published" selected={publishedDate} onChange={date => setPublishedDate(date)} />
          {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
            <CategorySelect />
          {/* {categoryError && <small className="d-block form-text text-danger mt-2">Select category</small>} */}
        </div>

        <div className="mb-3">
          <label htmlFor="shortDescription" className="form-label">Short description</label>
          <textarea 
            {...register(
              "shortDescription", 
              { 
                required: true,
                minLength: 20, 
              }
            )}
            className="form-control" 
            id="shortDescription" 
            rows="3" 
            placeholder="Enter short description here" 
            value={shortDescription} 
            onChange={e => setShortDescription(e.target.value)} >
          </textarea>
          {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Short description is too short (min is 20)</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="MainContent" className="form-label">Main content</label>
          <ReactQuill theme="snow" id="MainContent" value={content} onChange={setContent} />
          {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
        </div>

      </form>
      <button type="button" className='btn btn-primary' onClick={validate(handleSubmit)}>{actionText}</button>
    </Container>
  );

};

export default PostForm;