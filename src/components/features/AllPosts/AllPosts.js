import { useSelector } from "react-redux";
import Post from '../../pages/Post/Post';
import { getAllPosts } from "../../../redux/postsRedux";
import { NavLink } from "react-bootstrap";
import { Container } from "react-bootstrap";

const AllPosts = () => {

  const posts = useSelector(state => getAllPosts(state));

  return (
    <Container>
      <div className="d-flex justify-content-between mb-4">
        <h2>All posts</h2>
        <button type="button" className='btn btn-outline-info'>Add post</button>
      </div>
      <ul className="d-flex flex-wrap row">
        {posts.map(post => 
          <Post key={post.id} title={post.title} id={post.id} shortDescription={post.shortDescription} author={post.author} publishedDate={post.publishedDate}/>)}
      </ul>
      </Container>
  );
};

export default AllPosts;