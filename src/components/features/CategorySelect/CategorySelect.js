import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';

const CategorySelect = () => {

  const categories = useSelector(state => getAllCategories(state));
  return (
    <select className="form-select" aria-label="Category select">
      <option>Select category...</option>
      {categories.map(category => <option key={category.id} value={category.value}>{category.value}</option>)}
    </select>
  );
};

export default CategorySelect;