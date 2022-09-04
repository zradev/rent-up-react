import React from "react";
import { footer } from "../../../../data/Data";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      {footer.map((val, index) => (
        <div className="box" key={index}>
          <h3>{val.title}</h3>
          <ul>
            {val.text.map((items, index) => (
              <li key={index}>
                <Link to={items.path}>{items.list}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Navigation;
