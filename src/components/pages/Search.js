import{ React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostList from '../PostList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Search() {

    const [state, setState] = useState({data: [], isLoading:true, error: null, search:"iewbifluibwl", term:""})
    const dark = useSelector((state)=>{return state.dark.value})

    const handleSubmit = (e) => {
        e.preventDefault();
        setState({...state, search: state.term})
    }

    useEffect(() => {
        const url = `https://dummyjson.com/posts/search?q=${state.search}`;
    
        fetch(url)
          .then((response) => response.json())
          .then((jsonData) => {
            setState({...state, data:jsonData.posts, isLoading:false})})
          .catch((err) => {
            setState({...state, error:err});
          });
      }, [state.search]);

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
            <Navbar className="bg-body-tertiary justify-content-between" data-bs-theme={`${dark?"dark":"light"}`}>
            <Form inline="true" onSubmit={handleSubmit}>
                <Row>
                    <Col xs={12}/>
                    <Col xs={6}>
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                            value={state.term}
                            onChange={(e) => setState({...state, term: e.target.value})}
                        />
                    </Col>
                    <Col xs={6}>
                        <Button type="submit" variant={`${dark?"dark":"light"}`}>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Navbar>
            </Col>
        </Row>
        <Row className="justify-content-md-center" style={{backgroundColor:`${dark?'#2a3135':"#fff"}`, minHeight: '86.86vh'}}>
            {state.data.length === 0 ? <div style={{color: `${dark?"white":"black"}`, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '75vh', fontSize:25}}>No posts found.</div>:<Col><PostList posts={state.data} dark={dark} /></Col>}
        </Row>
        </Container>
      );
};

export default Search;
