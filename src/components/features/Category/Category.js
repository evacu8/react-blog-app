import { useSelector } from "react-redux";
import PostCard from '../PostCard/PostCard';
import { getPostsByCategory } from "../../../redux/categoriesRedux";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { capitalize } from '../../../utils/capitalize';

const Category = () => {

  const { category } = useParams();
  const categoryData = capitalize(category);
  const posts = useSelector(state => getPostsByCategory(state, categoryData));

  return (
    <Container>
      <div className="d-flex justify-content-between mb-4">
        <h2>Category: {category}</h2>
      </div>
      <ul className="d-flex flex-wrap row">
        {posts.map(post => 
          <PostCard 
            key={post.id} 
            title={post.title} 
            id={post.id} 
            shortDescription={post.shortDescription} 
            author={post.author} 
            publishedDate={post.publishedDate} 
            category={post.category}/>)}
      </ul>
      </Container>
  );
};

export default Category;