import "./Social.css";
import {
    Card,
    Row,
    Col
} from "react-bootstrap";
import {
    HiOutlineMail
} from "react-icons/hi";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillPhone
} from "react-icons/ai";

export default function Social() {
    return (
        <>
            <div id="social" className="social">
                <div className="d-flex justify-content-center">
                    <Row className="row-cols-md-4 pt-5">
                        <Col>
                            <Card className="rounded-0 bg-dark m-2 card_social_git">
                                <a href="https://github.com/NoamCurely">
                                    <AiFillGithub className="icon_social" color="white"/>
                                </a>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="rounded-0 m-2 card_social_link">
                                <a href="https://www.linkedin.com/in/noam-cur%C3%A9ly/">
                                    <AiFillLinkedin className="icon_social" color="white"/>
                                </a>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="rounded-0 m-2 card_social_mail">
                                <a href="mailto:noamcurely@gmail.com">
                                    <HiOutlineMail className="icon_social" color="white"/>
                                </a>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="rounded-0 m-2 card_social_phone">
                                <a href="tel:0695001943">
                                    <AiFillPhone className="icon_social" color="white"/>
                                </a>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <h6 className="text-white">© Copyright 2023 - NOAM CURELY. Tous droits réservés.</h6>
                </div>
            </div>
        </>
    );
}