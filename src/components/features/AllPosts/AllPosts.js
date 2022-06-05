import { useSelector } from "react-redux";
import PostCard from '../PostCard/PostCard';
import { getAllPosts } from "../../../redux/postsRedux";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const AllPosts = () => {

  const posts = useSelector(state => getAllPosts(state));

  return (
    <Container>
      <div className="d-flex justify-content-between mb-4">
        <h2>All posts</h2>
        <Link to="/post/add">
          <button type="button" className='btn btn-outline-info'>Add post</button>
        </Link>
      </div>
      <ul className="d-flex flex-wrap row">
        {posts.map(post => 
          <PostCard key={post.id} title={post.title} id={post.id} shortDescription={post.shortDescription} author={post.author} publishedDate={post.publishedDate}/>)}
      </ul>
      </Container>
  );
};

export default AllPosts;