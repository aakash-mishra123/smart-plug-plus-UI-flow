import './styles/DropdownMenu.css';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { menuItems } from '../../utils/constants';

const MenuItem = ({ title, items }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown">
        <button
          onClick={() => setOpen(!open)}
          className="dropdown-button"
        >
          {title} <BiChevronDown size={16} />
        </button>
        {open && (
          <div className="dropdown-menu">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="dropdown-item"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    )
}

const DropdownMenu = () => {
    return (
        <nav className="menu_wrapper">
        {menuItems.map((menu, index) => (
          <MenuItem key={index} title={menu.title} items={menu.items} />
        ))}
      </nav>
    )
}

export default DropdownMenu;