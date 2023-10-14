import {
    Container,
    Nav,
    Navbar
} from "react-bootstrap";
import {
    GoTerminal
} from "react-icons/go";

export default function() {
    return (
        <>
            <Navbar variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/"><GoTerminal color="white" size={70}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                        <Nav className="fs-5">
                            <Nav.Link href="/Profil" className="text-uppercase">Profil</Nav.Link>
                            <Nav.Link href="#pricing" className="text-uppercase">Compétences</Nav.Link>
                            <Nav.Link href="#pricing" className="text-uppercase">Formations</Nav.Link>
                            <Nav.Link className="text-uppercase">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}