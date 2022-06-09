import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../../redux/categoriesRedux';

const AllCategories = () => {

  const categories = useSelector(state => getAllCategories(state));
  return (
    <Container className='col-8'>
      <ul className="list-group">
        {categories.map(category => <Link key={category.id} to={"/category/" + category.value}> <li className="list-group-item" key={category.id}>{category.value}</li> </Link>)}
      </ul>
    </Container>
  );
};

export default AllCategories;