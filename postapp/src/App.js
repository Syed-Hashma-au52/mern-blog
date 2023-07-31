import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch posts from API
  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Filter posts based on the search text
  const filterPosts = () => {
    const searchTextLowerCase = searchText.toLowerCase();
    const filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(searchTextLowerCase)
    );
    setFilteredPosts(filteredPosts);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <button onClick={filterPosts}>Search</button>
      <div id="postList">
        {filteredPosts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
};

const Post = ({ title, body }) => {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default App;

