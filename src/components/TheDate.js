import React from "react";

const TheDate = () => {

    let theDate = new Date();
    let today = theDate.toDateString();

  return (
    <div className="date">
      <h3 aria-label="date">{today}</h3>
    </div>
  );
};

export default TheDate;
