import { X } from 'lucide-react';
import MegaMenu from './MegaMenu';

const MobileNavigationDrawer = ({
  isDrawerOpen,
  setIsDrawerOpen,
}) => {
  return (
    <div className="mobile_navigation">
      {isDrawerOpen && (
        <div
          className="backdrop"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}

      <div
        className={`drawer_content ${isDrawerOpen ? 'active' : ''}`}
      >
        <div className="close_drawer">
          <button onClick={() => setIsDrawerOpen(false)}>
            <X size={30} />
          </button>
        </div>
        <div>
          <MegaMenu />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigationDrawer;