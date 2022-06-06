import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { Navigate } from 'react-router-dom';
import DeleteModal from '../../views/DeleteModal/DeleteModal';
import { useState } from 'react';

const SinglePost = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

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
            <strong>Publised:</strong> {postData.publishedDate}
          </Card.Text>
          <Card.Text className='my-2'>
            {postData.content}
          </Card.Text>
        </Card.Body>
      </Card>
      <DeleteModal id={id} show={showModal} handleClose={handleClose}/>
    </Container>
  );
};

export default SinglePost;