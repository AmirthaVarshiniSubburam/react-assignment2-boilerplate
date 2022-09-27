import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    
    <div>

        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">News Feed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            {/* <NavDropdown title="Category" id="basic-nav-dropdown" className="ms-2" >
              <NavDropdown.Item href="#"  >Business</NavDropdown.Item>
              <NavDropdown.Item href="#">Entertainment</NavDropdown.Item>
              <NavDropdown.Item href="#">General</NavDropdown.Item>
              <NavDropdown.Item href="#">Health</NavDropdown.Item>
              <NavDropdown.Item href="#">Science</NavDropdown.Item>
              <NavDropdown.Item href="#">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#">Techonology</NavDropdown.Item>
            </NavDropdown> */}
            {/* <Form className="d-flex ms-3" >
            <Form.Control
              type="search"
              placeholder="Type here..."
              className="me-3"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form> */}

          {/* <Link to='/register'>Register</Link>
          <Link to='/createnews'>Create News</Link>
          <Link to='/readnow'>Read Now</Link>
          <Link to='/dashboard'>Dashboard</Link> */}

          {/* <Outlet /> */}
          <Nav.Link className="ms-5" ><Link to='/'>Home</Link></Nav.Link>
          
          <Nav.Link href="#" className="ms-5" ><Link to='/dashboard'>Dashboard</Link></Nav.Link>
          {/* <Nav.Link href="#" className="ms-3" >Trending</Nav.Link> */}
          <Nav.Link href="#" className="ms-5" ><Link to='/createnews'>Create News</Link></Nav.Link>
          <Nav.Link href="#" className="ms-5" ><Link to='/readnow'>Read Now</Link></Nav.Link>

          <Nav.Link href="#" className="ms-5" ><Link to='/login'>Login</Link></Nav.Link>
          <Nav.Link href="#" className="ms-5" ><Link to='/register'>Register</Link></Nav.Link>
          
          {/* <Button variant="success" className="p-2 ms-3" >Login</Button>
          <Button className="ms-3" >Sign Up</Button> */}

          {/* <Button variant="success" className="p-2 ms-3" >Login</Button>
          <Button className="ms-3" >Sign Up</Button> */}
          
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
  )
}

export default Header