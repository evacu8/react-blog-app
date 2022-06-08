import { Card, Container } from 'react-bootstrap';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import DeleteModal from '../../views/DeleteModal/DeleteModal';
import { useState } from 'react';
import { removePost } from '../../../redux/postsRedux';
import { dateToStr } from '../../../utils/dateToStr';

const SinglePost = () => {

  const dispatch = useDispatch();

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleRemove = (e) => {
    e.preventDefault();
    setShowModal(false);
    dispatch(removePost(id));
  }

  if(!id) return <Navigate to="/" />

  if(!postData) return <Navigate to="/" />

  return (
    <Container className='col-lg-8 '>
      <Card >
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title>{postData.title}</Card.Title>
            <div className='m-0'>
              <Link to={`/post/edit/${id}`}>
                <button type="button" className='btn btn-outline-info me-2'>Edit</button>
              </Link>
              <button type="button" className='btn btn-outline-danger' onClick={handleShow}>Delete</button>
            </div>
          </div>
          <Card.Text className='my-0'>
            <strong>Author:</strong> {postData.author}
          </Card.Text>
          <Card.Text className='my-0'>
            <strong>Published:</strong> {dateToStr(postData.publishedDate)}
          </Card.Text>
          <p className='my-2' dangerouslySetInnerHTML={{ __html: postData.content }} />
        </Card.Body>
      </Card>
      <DeleteModal id={id} show={showModal} handleClose={handleClose} handleRemove={handleRemove}/>
    </Container>
  );
};

export default SinglePost;