import React, { useState } from "react";
import "../Home.css"; 

const Home = () => {

  const [newPost, setNewPost] = useState("");

  return (
    <div>
      <h3 className="welcome-text">Welcome to the Social Media Feed!</h3>

      <div className="post-container">
        <input
          type="text"
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button>Post</button>
      </div>
    </div>
  );
};

export default Home;
