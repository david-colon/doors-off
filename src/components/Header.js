import { Navbar, NavbarBrand, Container, Row, Col, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SplashImg from '../app/assets/splash.jpg'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img className='float-start' src={SplashImg} alt='nucamp logo' />
                <h1 className='mt-1'>NuCamp</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse navbar isOpen={menuOpen}>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'><i className="fa fa-home fa-lg" /> Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='directory'><i className="fa fa-compass fa-lg" /> Directory</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='about'><i className="fa fa-address-card fa-lg" /> About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='contact'><i className="fa fa-comments fa-lg" /> Contact</NavLink>
                    </NavItem >
                </Nav >
            </Collapse>
        </Navbar >
    )
}

export default Header