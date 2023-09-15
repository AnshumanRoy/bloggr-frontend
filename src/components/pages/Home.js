import{ React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostList from '../PostList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {

    const [state, setState] = useState({data: [], isLoading:true, error: null, page: 1, hasMore:true})
    const dark = useSelector((state)=>{return state.dark.value})

    useEffect(() => {
        const url = 'https://dummyjson.com/posts';
    
        fetch(url)
          .then((response) => response.json())
          .then((jsonData) => {
            setState({...state, data:jsonData.posts, isLoading:false})})
          .catch((err) => {
            setState({...state, error:err});
          });
      }, []);

      if (state.isLoading) {
        return <div>Loading...</div>;
      }

      if (state.error) {
        return <div>Error: {state.error.message}</div>;
      }
      
      return (
        <Container style={{paddingTop:"56px"}}>
        <Row className="justify-content-md-center" style={{backgroundColor:`${dark?'#2a3135':"#fff"}`}}>
            <Col>
            <div className={`App ${dark ? 'dark-mode' : ''}`} style={{backgroundColor: `${dark?"#2a3135":""}`, flex:'true'}}>
                <PostList posts={state.data} dark={dark} />
            </div>
            </Col>
        </Row>
        </Container>
      );
};

export default Home;

