import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () =>{
    const projects = [
        {
            title: 'Business Startup',
            description:'Design & Development',
            imgUrl:projImg1,
        },
        {
            title: 'Business Startup',
            description:'Design & Development',
            imgUrl:projImg2,
        },
        {
            title: 'Business Startup',
            description:'Design & Development',
            imgUrl:projImg3,
        },
        {
            title: 'Business Startup',
            description:'Design & Development',
            imgUrl:projImg1,
        },
        {
            title: 'Business Startup',
            description:'Design & Development',
            imgUrl:projImg1,
        },
        {
            title: 'Business Startup',
            description:'Design & Development',
            imgUrl:projImg2,
        },
    ]
    return(
        <section className="project" id='projects'>
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? 'animate__animated animate__fadeIn': ''}>
                                <h2>Projects</h2>
                                <p>hubaubjfhello bjbdaj njhkjfa mondiali a incrementare la loro produttivita', ridurre l'inquinamento delle acque e garantire ai consumatori una puntuale tra</p>
                            
                                <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>
                                        <Nav.Item>
                                            <Nav.Link eventKey='first'>Tab One</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tap Two</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                        </Nav.Item>
                                        </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey='first'>
                                            <Row>
                                                {
                                                    projects.map((project, index)=>{
                                                        return(
                                                            <ProjectCard 
                                                            key={index}
                                                            {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='second'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='thrid'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-img-right" src={colorSharp2} alt=''></img>
        </section>
    )
}