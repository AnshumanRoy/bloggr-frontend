import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div style={{height: "100%"}}>
      {posts.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default PostList;