import {Container, Navbar,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const NavigationBar = () => {
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" width="auto">
        <Container>
        <Navbar.Brand href="#home">Vaishnavi's Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/about">
                 About Us
              </Nav.Link>
               <Nav.Link as={NavLink} to="/contact">
                 Contact Us
               </Nav.Link>
               <Nav.Link as={NavLink} to="/tocart">
                 My cart
               </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>

    )
}
export default NavigationBar;