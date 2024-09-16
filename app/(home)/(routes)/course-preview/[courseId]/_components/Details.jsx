import React from "react";

const Details = ({ courseDetail }) => {
  return (
    <div>
      <h2 className="text-[20px] font-medium">{courseDetail.courseName}</h2>
    </div>
  );
};

export default Details;
