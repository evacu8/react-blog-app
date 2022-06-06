import styles from './AddPost.module.scss';
import AddPostForm from '../../features/AddPostForm/AddPostForm';

const AddPost = () => {
  return (
    <div className={styles.addPost}>
      <AddPostForm /> 
    </div>
  );
};

export default AddPost;