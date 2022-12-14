import {useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import $ from 'jquery';

const AppMenu = () => {
  useEffect(() => {
    return () => {
      $(".navbar-nav .nav-link").on("click", function(){
        $(".navbar-nav").find(".active").removeClass("active");
        $(this).addClass("active");
     });
    }
  },)

  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home">RFG LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#home" >HOME</Nav.Link>
            <Nav.Link href="#aboutus">ABOUT US</Nav.Link>
            <Nav.Link href="#services">SERVICES</Nav.Link>
            <Nav.Link href="#contactus">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppMenu;