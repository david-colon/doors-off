import { Navbar, NavbarBrand, Container, Row, Col, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SplashImg from '../app/assets/splash.jpg'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Nav
            justified
            pills
        >
            <NavItem>
                <NavLink
                    active
                    to="/"
                >
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/about">
                    About
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/locations">
                    Locations
                </NavLink>
            </NavItem>
            {/* <Container className="bg-light border" fluid="sm">
                <Row>
                    <Col>
                        <div className="w-50"><img className="w-50" src={SplashImg} alt='Doors Off' />
                        <h1 className='mt-1'>Doors Off</h1></div>
                    </Col>
                </Row>
            </Container>

            <Navbar fill className='navbar navbar-expand-lg navbar-dark bg-white' sticky='top' expand='md'>
                <NavbarBrand className='ms-5' sticky='top' href='/'>
                    adfjdlksaflkadsjflksdajlf;jlds
                </NavbarBrand>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse navbar isOpen={menuOpen}>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/'><i className="fa fa-home fa-lg" /> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='locations'><i className="fa fa-compass fa-lg" /> Locations</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='about'><i className="fa fa-address-card fa-lg" /> About</NavLink>
                        </NavItem>
                    </Nav >
                </Collapse>
            </Navbar > */}

        </Nav>
    )
}

export default Header