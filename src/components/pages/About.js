import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import {BiLogoLinkedinSquare} from 'react-icons/bi'
import {FaGithub, FaSquareGithub} from 'react-icons/fa6'

const About = () => {
    const dark = useSelector((state)=>{return state.dark.value})

    const cardStyle = {
        backgroundColor: dark ? '#2a3135' : '#fff',
        color: dark ? '#fff' : '#2a3135',
        width: '100%',
        height: "100%",
    };

  return (
    <div>
      <Container style={{paddingTop:"56px"}}>
        <Row className="justify-content-md-center" style={{backgroundColor:`${dark?'#2a3135':"#fff"}`, minHeight: '93.3vh'}}>
            <Col>
                <Card style={cardStyle}>
                    <Card.Body>
                        <Card.Title><h3><b>About</b></h3></Card.Title>
                        <hr/>
                        <Card.Text>
                            <br/>
                            <h5><b>Bloggr</b></h5>
                            <p>
                                <b>Bloggr</b> is a blogging application developed using the <b>React.js</b> library. It features a home page, a
                                page to create a new post, and functionality to search for posts using a query term. Users can also switch
                                seamlessly between <b>Light</b> and <b>Dark</b> mode for improved accessibility. It was developed using 
                                concepts like <b>component-based architecture</b>, <b>single page application</b>, <b>client-side 
                                routing</b> and <b>state management</b> using <b>Redux</b>.
                            </p>
                            <br/>
                            <p>The API endpoints used for the application are documented <a href='https://dummyjson.com/docs/posts'>here</a>.</p>
                            <hr/>
                            <br/>
                            <h5><b>About me</b></h5>
                            <p>
                                My name is <b>Anshuman Roy</b>. I graduated in Computer Engineering from Delhi Technological University in 2023.
                                I am passionate about web development and am skilled in technologies like <b>React.js</b>, <b>Django</b> and <b>SQL</b>. 
                            </p>
                            <br/>
                            <p>
                                You can find links to my profiles here:
                            </p>
                            <br/>
                            <table>
                                <tr>
                                    <td style={{padding:10}}><a href='https://www.linkedin.com/in/anshuman-roy-0474091a3/'><BiLogoLinkedinSquare size={40} color={`${dark?"white":"black"}`}/></a></td>
                                    <td style={{padding:10}}><a href='https://github.com/AnshumanRoy'><FaGithub size={30} color={`${dark?"white":"black"}`}/></a></td>
                                </tr>
                            </table>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default About;