import { React, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button, Stack, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';

const Create = () => {
    const dark = useSelector((state)=>{return state.dark.value})
    const [state, setState] = useState({title:"", body:"", tags: [], currTag:""})
    const navigate = useNavigate()

    const handleAddTag = (e) => {
        e.preventDefault();
        setState({...state, tags:[...state.tags, state.currTag], currTag:""})
    }

    const handleRemoveTag = (index) => {
        const tags = state.tags
        tags.splice(index, 1)
        setState({...state, tags: tags})
    }

    const handlePost = (e) => {
        e.preventDefault();
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: state.title,
                userId: Math.floor(Math.random() * 100),
                body: state.body,
                tags: state.tags
            })
        })
        .then(navigate('/'))
    }
    
    return (
        <div>
        <Container style={{paddingTop:"56px"}}>
            <Row className="justify-content-md-center" style={{backgroundColor:`${dark?'#2a3135':"#fff"}`, minHeight: '93.3vh'}}>
                <Col>
                    <Form data-bs-theme={`${dark?'dark':'light'}`} style={{paddingTop:20}}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Add title here" value={state.title} onChange={(e) => setState({...state, title: e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={22} placeholder='The body goes here' value={state.body} onChange={(e) => setState({...state, body: e.target.value})}/>
                        </Form.Group>
                        <Row>
                            <div style={{padding: "20px"}}>
                                <Stack direction="horizontal" gap={2}>
                                    {state.tags.map((tag, index) => (
                                    <Button key={index} variant={`${dark?"dark":"secondary"}`} className="mr-2" onClick={()=>handleRemoveTag(index)}>{tag}</Button>))}
                                </Stack>
                            </div>
                        </Row>
                        <Row inline="true">
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Tags go here"
                                    className=" mr-sm-2"
                                    value={state.currTag}
                                    onChange={(e) => setState({...state, currTag: e.target.value})}/>
                            </Col>
                            <Col>
                                <Button variant={`${dark?"dark":"light"}`} onClick={handleAddTag}>Add Tag</Button>
                            </Col>
                            <Col>
                                <Button variant="outline-success" style={{width:"150px"}} onClick={handlePost}>Post</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
        </div>
      );
}

export default Create
