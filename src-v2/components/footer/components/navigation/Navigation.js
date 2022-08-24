import React from "react";
import { footer } from "../../../../data/Data";

const Navigation = () => {
  return (
    <>
      {footer.map((val, index) => (
        <div className="box" key={index}>
          <h3>{val.title}</h3>
          <ul>
            {val.text.map((items, index) => (
              <li key={index}>{items.list}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Navigation;
