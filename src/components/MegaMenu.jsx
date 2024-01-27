import { menuData } from '../menuData';
import MenuItem from './MenuItem';

const MegaMenu = () => {
  return (
    <div className="nav__container">
      <nav>
        <ul>
          {menuData.map(({ label, href, children }, index) => {
            return (
              <MenuItem key={index} {...{ label, href, children }} />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MegaMenu;