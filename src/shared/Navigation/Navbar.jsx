import './styles/Navbar.css';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import TvsLogo from '../../assets/logo.png';


const LogoImg = () => (
      <img
        src={TvsLogo}
        alt=""
        className='brand_logo'
        // style={{
        //   height: '100%',
        //   background: '#fff',
        // }}
      />
  )

const Navbar = () => {
    return (
        <div className="navbar">
            <LogoImg />
            <DropdownMenu />
        </div>
    )
}

export default Navbar;