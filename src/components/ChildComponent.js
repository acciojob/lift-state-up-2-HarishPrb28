import React from "react";

const ChildComponent = (props) => {
  const { showModal, setShowModal } = props;
  return (
    <div className="child">
      <h2>Child Component</h2>
      <input
        type="text"
        onChange={(e) => {
          setShowModal(e.target.value);
        }}
        value={showModal}
      />
    </div>
  );
};

export default ChildComponent;
