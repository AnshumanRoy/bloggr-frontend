import React from 'react';
import { Badge, Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

const Post = ({ post }) => {
  
  const dark = useSelector((state) => { return state.dark.value });

  const cardStyle = {
    backgroundColor: dark ? '#2a3135' : '#fff',
    color: dark ? '#fff' : '#2a3135',
  };

  return (
    <Card style={cardStyle} className="mb-3">
      <Card.Body>
        <Card.Title style={{ textAlign: "left" }}>
          <span>
            <Stack direction="horizontal" gap={2}>
            <b>{post.title}</b>
            {post.tags.map((tag, index) => (
              <Badge key={index} bg={`${dark?"dark":"secondary"}`} className="mr-2">
                {tag}
              </Badge>))}
            </Stack>
            </span>
            </Card.Title>  
        <hr />
        <Card.Text style={{ textAlign: 'justify' }}>{post.body}</Card.Text>
        <Card.Footer>
          <small className="text" style={{ color: "gray" }}>Reactions: {post.reactions}</small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Post;
