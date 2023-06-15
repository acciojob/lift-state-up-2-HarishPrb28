import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
  const [showModal, setShowModal] = useState("");
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      {showModal && <p>{showModal}</p>}
      <ChildComponent showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default ParentComponent;
