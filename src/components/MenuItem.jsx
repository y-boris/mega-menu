import { NavLink } from 'react-router-dom';
import Container from './Container';
import DropdownContent from './DropdownContent';

const MenuItem = ({ label, href, children }) => {
  return (
    <li>
      <div className="nav_item_content">
        <NavLink
          to={href}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {label}
        </NavLink>
      </div>
      {children && (
        <div className="dropdown">
          <Container>
            <DropdownContent submenuscontent={children} />
          </Container>
        </div>
      )}
    </li>
  );
};

export default MenuItem;