import { Navbar, Nav, Container } from 'react-bootstrap'

const CustomNavbar = () => {
  return (
    <Navbar expand='lg' data-bs-theme='dark' bg='dark'>
      <Container>
        <Navbar.Brand href='#home'>MyApp Meteo</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link>Rome</Nav.Link>
            <Nav.Link>London</Nav.Link>
            <Nav.Link>Paris</Nav.Link>
            <Nav.Link>Madrid</Nav.Link>
            <Nav.Link>New York</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
