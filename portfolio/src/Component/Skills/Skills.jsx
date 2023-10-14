import {
    IoLogoJavascript
} from "react-icons/io5";
import {
    TfiHtml5
} from "react-icons/tfi";
import {
    FaCss3Alt,
    FaLaravel,
    FaNode
} from "react-icons/fa";
import {
    DiSass,
    DiLinux
} from "react-icons/di";
import {
    BiLogoReact,
    BiLogoMongodb,
    BiLogoPhp,
    BiLogoFirebase,
    BiLogoDocker
} from "react-icons/bi";
import {
    SiBootstrap,
    SiExpress,
    SiJsonwebtokens,
    SiMysql
} from "react-icons/si";
import {
    HiCommandLine
} from "react-icons/hi2";
import {
    FiFigma
} from "react-icons/fi";
import "./Skills.css";
import { 
    Col, 
    Container, 
    Row 
} from "react-bootstrap";

export default function Skills() {
    return (
        <>
            <Container className="contain_skills">
                <Row className="text-center">
                    <Col>
                        <h1 className="fw-light text-white">Compétences</h1>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <Row className="g-4 col-xl-12 col-lg-12 col-md-12">
                    <Col>
                        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript">
                            <IoLogoJavascript className="icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://developer.mozilla.org/fr/docs/Web/HTML">
                            <TfiHtml5 className="icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://developer.mozilla.org/fr/docs/Web/CSS">
                            <FaCss3Alt className="icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://sass-lang.com/">
                            <DiSass className="icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://fr.legacy.reactjs.org/">
                            <BiLogoReact className="icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://getbootstrap.com/">
                            <SiBootstrap className="icon"/>
                        </a>
                    </Col>
                </Row>
                <Row className="g-4 col-xl-12 col-lg-12 col-md-12 mt-4">
                    <Col>
                        <a href="https://nodejs.org/en/docs">
                            <FaNode className="icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://expressjs.com/fr/">
                            <SiExpress className="icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.mongodb.com/fr-fr">
                            <BiLogoMongodb className="icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://jwt.io/">
                            <SiJsonwebtokens className="icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.php.net/">
                            <BiLogoPhp className="icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.mysql.com/fr/">
                            <SiMysql className="icon"/>
                        </a>
                    </Col>
                </Row>
                <Row className="mt-4 g-4 col-xl-12 col-lg-12 col-md-12">
                    <Col>
                        <a href="https://laravel.com/">
                            <FaLaravel className="icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://doc.ubuntu-fr.org/accueil">
                            <DiLinux className="icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <HiCommandLine className="icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://firebase.google.com/">
                            <BiLogoFirebase className="icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.figma.com/fr/">
                            <FiFigma className="icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.docker.com/">
                            <BiLogoDocker className="icon"/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    );
}