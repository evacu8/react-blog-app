import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostCard = props => {
  return (
    <div className='col-sm-6 col-lg-4 my-2'>
      <Card >
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className='my-0'>
            <strong>Author:</strong> {props.author}
          </Card.Text>
          <Card.Text className='my-0'>
            <strong>Publised:</strong> {props.publishedDate}
          </Card.Text>
          <Card.Text className='my-2'>
            {props.shortDescription}
          </Card.Text>
          <Link to={`/post/${props.id}`}>
            <button type="button" className='btn btn-primary'>Read more</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostCard;