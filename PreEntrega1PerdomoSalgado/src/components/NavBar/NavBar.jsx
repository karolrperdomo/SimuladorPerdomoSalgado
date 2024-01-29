import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useGetCategories } from '../../hooks/useProducts';

const NavBar = () => {
    const { categories } = useGetCategories();

    const logoStyle = {
        marginRight: '10px',  // Espaciado a la derecha del logo
    };

    const titleStyle = {
        color: 'darkblue',
        fontWeight: 'bold',
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src="https://images.vexels.com/media/users/3/145732/isolated/preview/ba9bfe792bcb5cce0f8af1fb8d837443-logotipo-de-colibri.png"
                            width="50"  // Cambiado a un valor más grande
                            height="50" // Cambiado a un valor más grande
                            className="d-inline-block align-top"
                            alt="Logo"
                            style={logoStyle}  // Aplicar estilos específicos al logo
                        />
                        <span style={titleStyle}>Manualidades</span>
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            {categories.map((category, index) => (
                                <NavDropdown.Item key={index}>
                                    <Link key={index} to={`/category/${category}`}>
                                        {category}
                                    </Link>
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
};

export default NavBar;
