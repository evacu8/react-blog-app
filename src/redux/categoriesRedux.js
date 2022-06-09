//selectors
export const getAllCategories = state => state.categories;
export const getPostsByCategory = ({ posts }, category) => posts.filter(post => post.category === category);

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default categoriesReducer;