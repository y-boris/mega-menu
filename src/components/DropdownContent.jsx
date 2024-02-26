import React from 'react';
import { Link } from 'react-router-dom';

const DropdownContent = ({ submenuscontent, setIsDrawerOpen }) => {
  return (
    <div className="dropdown_content">
      {submenuscontent.map((item, index) => (
        <React.Fragment key={index}>
          <section>
            <h4>{item.heading}</h4>
            <ul>
              {item.submenu.map(({ label, href }, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setIsDrawerOpen && setIsDrawerOpen(false);
                  }}
                >
                  <Link to={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DropdownContent;
