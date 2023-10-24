import {
    Col,
    Container, Row
} from "react-bootstrap";
import "./Projects.css";

export default function Projects() {
    return (
        <>
            <Container className="projects">
                <Row className="text-center">
                    <Col>
                        <h1 className="fw-light text-white">Projects</h1>
                    </Col>
                </Row>
            </Container>
            <Container className="card_projects">
                <Row className="justify-content-md-center row row-cols-xs-1 row-gap-3">
                    <Col md={3} className="col-xs-auto">
                        <a href="https://github.com/NoamCurely/curelynoam">
                            <img className="img_repo" src="https://github-readme-stats.vercel.app/api/pin/?username=NoamCurely&repo=curelynoam&theme=dark&hide_border=true"/>
                        </a>
                    </Col>
                    <Col md={{ span: 4, offset: 4}}>
                        <a href="https://github.com/NoamCurely/Api_Rest">
                            <img className="img_repo" src="https://github-readme-stats.vercel.app/api/pin/?username=NoamCurely&repo=Api_Rest&theme=dark&hide_border=true"/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    );
}