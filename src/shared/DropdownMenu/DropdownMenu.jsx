import "./styles/DropdownMenu.css";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { menuItems } from "../../utils/constants";
import { Collapse } from "react-bootstrap";

const MenuItem = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if(open){
      console.log(title, open);
    }
  }, [open, title])

  return (
    <div className="dropdown">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        //onClick={() => setOpen(!open)}

        className={`dropdown-button ${open ? 'border-bottom border-4 border-primary' : 'border-bottom border-4 border-white'}`}
      >
        {title} <BiChevronDown size={16} />
      </button>
      <Collapse in={open} dimension="height">
        <div 
          className="dropdown-menu"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          > 
          {items.map((item, index) => (
            <a key={index} href={item.link} className="dropdown-item">
              {item.label}
            </a>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

const DropdownMenu = () => {
  return (
    <div className="menu_wrapper ">
      {menuItems.map((menu, index) => (
        <MenuItem key={index} title={menu.title} items={menu.items} />
      ))}
    </div>
  );
};

export default DropdownMenu;
