import {
    Card,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import {
    AiFillGithub,
    AiFillLinkedin
} from "react-icons/ai";
import picture from "../../assets/photo_profil.jpeg";
import "./Profil.css";

export default function CardProfil() {
    return (
        <>
            <div id="profil"></div>
            <Container className="contain">
                <Row className="row_profil">
                    <Col className="col-xl-4 col-lg-7 col-md-5 align-self-center mt-5 col_test d-flex justify-content-center">
                        <Card className=" rounded-0 border-0 card_profil">
                            <Card.Img src={picture} className="profil_image"/>
                            <Card.Body>
                                <Card.Title className="text-center text-uppercase fs-1 fw-bold">curély noam</Card.Title>
                                <div className="d-flex justify-content-center">
                                    <hr className="my-4 hr_profil"/>
                                </div>
                                <Card.Text className="text-center fw-light fs-3 text-uppercase">
                                    développeur web full stack
                                </Card.Text>
                                <div className="d-flex justify-content-center">
                                    <a href="">
                                        <AiFillGithub size={40} color="black"/>
                                    </a>
                                    <a href="">
                                        <AiFillLinkedin size={40} color="black"/>
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-xl-4 col-lg-5 col-md-6 align-self-center mt-5">
                        <h1 className="text-uppercase fw-bold profil_title">hello</h1>
                        <p className="fs-3 fw-bold text-uppercase">à propos de moi</p>
                        <div>
                            <p className="fst-normal lh-base profil_text">
                                Développeur web full-stack junior, je suis passionné par la programmation et constamment avide d'apprendre et de comprendre le fonctionnement des différentes technologies. <br /> Autodidacte, je m'investis pleinement dans l'amélioration de mes compétences. <br /> En particulier, j'ai développé une expertise en utilisant React avec Bootstrap pour le front-end, ainsi que Node.js avec Express pour le back-end.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}