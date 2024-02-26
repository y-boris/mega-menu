import { NavLink } from 'react-router-dom';
import Container from './Container';
import DropdownContent from './DropdownContent';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MenuItem = ({ label, href, children, onToggle, active, setIsDrawerOpen }) => {
  return (
    <li>
      <div className="nav_item_content">
        <NavLink
          to={href}
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={() => {
            setIsDrawerOpen && setIsDrawerOpen(false);
          }}
        >
          {label}
        </NavLink>
        {children && (
          <button className="md:hidden" onClick={onToggle}>
            {active ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        )}
      </div>
      {children && (
        <div className={`dropdown ${active ? 'h-auto' : 'h-0 overflow-hidden md:h-auto'}`}>
          <Container>
            <DropdownContent submenuscontent={children} setIsDrawerOpen={setIsDrawerOpen} />
          </Container>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
