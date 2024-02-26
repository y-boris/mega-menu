import { useState } from 'react';
import { X } from 'lucide-react';
import MegaMenu from './MegaMenu';

const MobileNavigationDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const [clicked, setClicked] = useState(null);

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="mobile_navigation">
      {isDrawerOpen && <div className="backdrop" onClick={() => setIsDrawerOpen(false)}></div>}

      <div className={`drawer_content ${isDrawerOpen ? 'active' : ''}`}>
        <div className="close_drawer">
          <button onClick={() => setIsDrawerOpen(false)}>
            <X size={30} />
          </button>
        </div>
        <div>
          <MegaMenu handleToggle={handleToggle} clicked={clicked} setIsDrawerOpen={setIsDrawerOpen} />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigationDrawer;
