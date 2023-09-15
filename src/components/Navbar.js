import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { MdDarkMode } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../Redux/DarkSlice'
import { useNavigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import Create from './pages/Create';

function _Navbar() {

    const dark = useSelector((state)=>{return state.dark.value})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div>
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme={`${dark?"dark":"light"}`} fixed="top">
        <Container>
          <Navbar.Brand onClick={()=>navigate('/')}>Bloggr</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/search')}}>Search</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/create')}}>Create</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <Form data-bs-theme={`${dark?"dark":"light"}`}>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label={<MdDarkMode color={`${dark?"white":""}`}/>}
                    onChange={()=>{dispatch(toggle())}}
                />
            </Form>
        </Container>
        </Navbar>
        <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/search' element={ <Search /> }/>
                <Route path='/about' element={ <About /> }/>
                <Route path='/create' element={ <Create />}></Route>
        </Routes>
        </div>
    );
}

export default _Navbar;