import React from "react";
import "/assets/styles/Items.scss";

const Items = ({ c1, p2, p1, c2 }) => (
  <div className="mt-5">
    <div>
      <button className="b1" onClick={c1}>Click me</button>
      <button className="b2" onClick={c2}>Click me</button>
    </div>
    <div className="p1">
      <p>{p1}</p>
    </div>
    <div className="p2">
      <p>{p2}</p>
    </div>
  </div>
);

export default Items;
