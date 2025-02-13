import './styles/Navbar.css';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const Navbar = () => {
    return (
        <div className="navbar">
            <p>Navbar menu</p>
            <DropdownMenu />
        </div>
    )
}

export default Navbar;