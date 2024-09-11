import { Book, DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseList = ({ courses }) => {
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {courses.map((course, index) => (
        <Link href={"/course-preview/" + course.id}>
          <div
            key={index}
            className="border rounded-lg p-3 cursor-pointer hover:bg-purple-200"
          >
            <Image
              className="rounded-lg"
              src={course.banner.url}
              alt={course.courseName}
              width={400}
              height={400}
            />
            <div className="mt-2">
              <h2 className="text-[18px] font-medium">{course.courseName}</h2>
              <h2 className="text-gray-500 text-[15px]">
                <span className="text-black font-medium">Course Author:</span>{" "}
                {course.author}
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <Book className="h-4 w-4 rounded-full text-purple-500 bg-purple-100 p-1" />
                <h2 className="text-[12px]">{course.totalChapters} Chapters</h2>
              </div>
              <h2 className="mt-2 text-[15px] flex items-center">
                <DollarSign className="h-3 w-3" />
                {course.free ? "Free" : "Paid"}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
