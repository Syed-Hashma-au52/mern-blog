import React, { useState, useEffect } from 'react';
import Post from './Posts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from API only once on component mount
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const handleSearch = () => {
    // Filter the posts based on the search text when the button is clicked
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="app-container">
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter search text"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="posts-container">
        {filteredPosts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
};

export default App;