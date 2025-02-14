import './styles/Navbar.css';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import TvsLogo from '../../assets/logo.png';


const LogoImg = () => (
      <img
        src={TvsLogo}
        alt=""
        className='brand_logo'
      />
  )

const Navbar = () => {
    return (
        <div className="navbar_temp d-flex">
            <LogoImg />
            <DropdownMenu />
        </div>
    )
}

export default Navbar;