import { Book } from "lucide-react";
import React from "react";

const Details = ({ courseDetail }) => {
  return (
    <div className="mt-5 p-5 rounded-lg border">
      <h2 className="text-[20px] font-medium">{courseDetail.courseName}</h2>
      <div className="flex items-center gap-2 mt-2">
        <Book className="h-4 w-4 rounded-full text-purple-500 bg-purple-100 p-1" />
        <h2 className="text-[12px]">{courseDetail.totalChapters} Chapters</h2>
      </div>
      <p className="line-clamp-4 mt-3 text-gray-500">
        {courseDetail.description}
      </p>
    </div>
  );
};

export default Details;
