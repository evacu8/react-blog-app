import { useSelector } from "react-redux";
import Post from '../../pages/Post/Post';
import { getAllPosts } from "../../../redux/postsRedux";
import { NavLink } from "react-bootstrap";

const AllPosts = () => {

  const posts = useSelector(state => getAllPosts(state));

  return (
    <article >
      <div className="d-flex justify-content-between">
        <h2>All posts</h2>
        <button variant="outline-primary" as={NavLink} to="/post/add">Add post</button>
      </div>
      <ul>
        {posts.map(post => 
          <Post key={post.id} title={post.title} id={post.id} shortDescription={post.shortDescription} author={post.author} publishedDate={post.publishedDate}/>)}
      </ul>
    </article>
  );
};

export default AllPosts;