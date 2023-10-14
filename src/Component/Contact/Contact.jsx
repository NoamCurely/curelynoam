import {
    Form,
    Col,
    Row,
    Button,
    Container
} from "react-bootstrap";
import axios from "axios";
import {
    useState
} from "react";
import Swal from "sweetalert2";
import "./Contact.css";

export default function Contact() {
    const [name, SetName] = useState("");
    const [lastname, SetLastname] = useState("");
    const [email, SetEmail] = useState("");
    const [message, SetMessage] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        try { 
            const response = await axios.post("http://localhost:3002/send", {
                name,
                lastname,
                email,
                message
            });
            if ("data" in response) {
                SetName("");
                SetLastname("");
                SetEmail("");
                SetMessage("");
                Swal.fire({title: "Email envoyé avec succés", icon: "success"})
            }
        } catch (error) {
            Swal.fire({title: "Erreur lors de l'envoi du mail", icon: "error"});
        }
    }

    return (
        <>
            <div className="contact text-center">
                <h1 className="text-uppercase text-white fw-light">contacter moi</h1>
            </div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col className="col-lg-7">
                        <Form onSubmit={handleSubmit} className="mt-5">
                            <Row>
                                <Col className="mb-4">
                                    <Form.Group>
                                        <Form.Control size="lg" type="text" className="rounded-0 border border-secondary fw-semibold" placeholder="Nom" value={name} onChange={e => SetName(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Control size="lg" type="text" className="rounded-0 border border-secondary fw-semibold" placeholder="Prénom" value={lastname} onChange={e => SetLastname(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} className="mb-4">
                                    <Form.Group>
                                        <Form.Control size="lg" type="email" className="rounded-0 border border-secondary fw-semibold" placeholder="Email" value={email} onChange={e => SetEmail(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Control size="lg" type="text" className="rounded-0 border border-secondary fw-semibold" as="textarea" rows={4} placeholder="Message" value={message} onChange={e => SetMessage(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button type="submit" className="rounded-0 mt-4 btn-lg btn-light fw-semibold fs-4">Envoyer</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}