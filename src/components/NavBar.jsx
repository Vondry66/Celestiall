import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from "./logo.png";
import { signInWithGoogle } from "../firebase-config";
function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        Celestiall
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/events">Events</Nav.Link>
                            <Nav.Link href="/photos">Photos</Nav.Link>
                            <Nav.Link href="/skymap">Sky Map</Nav.Link>
                            <Nav.Link href="/news">News</Nav.Link>
                            <Nav.Link href="/chat">Chat</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                            
                        </Form>
                        
                        <Navbar.Text>
                        <Button className="user" onClick={signInWithGoogle}>Sign in</Button>
                            <p>Welcome {localStorage.getItem('name')}</p>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    </Container>
            </Navbar>
        </>
    );
}

export default NavBar;