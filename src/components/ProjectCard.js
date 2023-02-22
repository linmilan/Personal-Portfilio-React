import { Col } from "react-bootstrap"
import {BsGithub} from 'react-icons/bs'
import {BiSlideshow} from 'react-icons/bi'

export const ProjectCard = ({title, description, imgUrl, link, demo}) =>{
    return(
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt=''/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="proj-review">
                        <a href={link} target='_blank'><BsGithub /></a>
                        <a href={demo} target='_blank'><BiSlideshow /></a>
                    </div>
                </div>
            </div>
        </Col>
    )
}