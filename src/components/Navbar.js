import {Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';

//importing styles
import './custom.css'

const Navbar = () => {
    return (
        <Nav 
            className="navbar-dark bg-dark d-flex align-items-center"
        >
            <Container className="py-3">
                <Nav.Item>
                    <Link to={'/'}
                        className="navbar-brand text-uppercase text-white mb-0 h4 pri-font-family"
                        style={{letterSpacing: '5px'}}
                    >
                        poke<span className="pri-font-color">mutuus</span>
                    </Link>
                </Nav.Item>
            </Container>
        </Nav>
    )
}

export default Navbar