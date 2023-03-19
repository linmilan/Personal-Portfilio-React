import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';
import projImg5 from '../assets/img/project-img5.png';
import projImg6 from '../assets/img/project-img6.png';
import projImg7 from '../assets/img/project-img7.png';
import projImg8 from '../assets/img/project-img8.png';
import projImg9 from '../assets/img/project-img9.png';


import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () =>{
    const projects = [

        {
            title: 'Responsive E-commerce Webpage',
            description:'This is a responsive e-commerce website built with HTML, CSS, and JavaScript, featuring essential functionalities such as product display and shopping cart. It is deployed on GitHub pages and utilizes technologies including jQuery, Bootstrap, Font Awesome, and more. Some functionalities are currently under development.',
            imgUrl:projImg1,
            link:'https://github.com/linmilan/Ecommerce-HTML-CSS-JS',
            demo:'https://linmilan.github.io/Ecommerce-HTML-CSS-JS/'
        },
        {
            title: 'React Notes App',
            description:'Design & Development',
            imgUrl:projImg6,
            link:'https://github.com/linmilan/REACT-NOTES-APP',
            demo:'https://linmilan.github.io/REACT-NOTES-APP'
        },
        {
            title: 'Product Landing Page',
            description:'Design & Development',
            imgUrl:projImg2,
            link:'https://github.com/linmilan/Product-Landing-Page',
            demo:'https://linmilan.github.io/Product-Landing-Page/'
        },
        {
            title: 'Awesome Button',
            description:'Design & Development',
            imgUrl:projImg3,
            link:'https://github.com/linmilan/Awesome-Button-Ripple-Effects',
            demo:'https://linmilan.github.io/Awesome-Button-Ripple-Effects/'
        },
        {
            title: 'Balance Ball',
            description:'Design & Development',
            imgUrl:projImg4,
            link:'https://github.com/linmilan/Balance-Ball',
            demo:'https://linmilan.github.io/Balance-Ball/'
        },
        {
            title: 'City Skyline',
            description:'Design & Development',
            imgUrl:projImg5,
            link:'https://github.com/linmilan/City-Skyline',
            demo:'https://linmilan.github.io/City-Skyline/'
        },
        {
            title: 'Login Hover Effect',
            description:'Design & Development',
            imgUrl:projImg7,
            link:'https://github.com/linmilan/Login-with-hover-effect',
            demo:'https://linmilan.github.io/Login-with-hover-effect/'
        },
        {
            title: 'Picasso Painting',
            description:'Design & Development',
            imgUrl:projImg8,
            link:'https://github.com/linmilan/Picasso-painting',
            demo:'https://linmilan.github.io/Picasso-painting/'
        },
        {
            title: 'Clock',
            description:'This project utilizes HTML, CSS, and JavaScript . The current time is obtained by instantiating a time object, and the setInterval() function is used to update the clock every second. To facilitate code management and maintenance, common functionalities such as obtaining the current time and setting the pointer rotation angle have been encapsulated into functions.',
            imgUrl:projImg9,
            link:'https://github.com/linmilan/Clock',
            demo:'https://linmilan.github.io/Clock/'
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
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                            
                                <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>
                                        <Nav.Item>
                                            <Nav.Link eventKey='first'>All</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Front-End</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Tiny Things</Nav.Link>
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
                                        <Tab.Pane eventKey='third'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-img-right" src={colorSharp2} alt=''></img> */}
        </section>
    )
}