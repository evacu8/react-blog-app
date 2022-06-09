import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';

const AllCategories = () => {

  const categories = useSelector(state => getAllCategories(state));
  return (
    <Container>
      <ul className="list-group">
        {categories.map(category => <li className="list-group-item" key={category.id}>{category.value}</li>)}
      </ul>
    </Container>
  );
};

export default AllCategories;