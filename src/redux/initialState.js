const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title 1',
      shortDescription: 'Short description of the article 1...',
      content: 'Main content of the article 1',
      publishedDate: new Date('02-02-2022'),
      category: 'Sport',
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Article title 2',
      shortDescription: 'Short description of the article 2...',
      content: 'Main content of the article 2',
      publishedDate: new Date('02-02-2022'),
      category: 'Movies',
      author: 'John Doe'
    },
    {
      id: '3',
      title: 'Article title 3',
      shortDescription: 'Short description of the article 3...',
      content: 'Main content of the article 3',
      publishedDate: new Date('02-02-2022'),
      category: 'Sport',
      author: 'John Doe'
    },
    {
      id: '4',
      title: 'Article title 4',
      shortDescription: 'Short description of the article 4...',
      content: 'Main content of the article 4',
      publishedDate: new Date('02-02-2022'),
      category: 'News',
      author: 'John Doe'
    },
  ],

  categories: [
    {
      id: '1',
      value: 'sport',
    },
    {
      id: '2',
      value: 'news',
    },
    {
      id: '3',
      value: 'movies',
    },
  ],
}

export default initialState;