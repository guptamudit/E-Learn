"use client";

import React, { useEffect, useState } from "react";

import { getCourseList } from "@/app/_services";
import Category from "./_components/Category";
import CourseList from "./_components/CourseList";

const Browse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList().then((res) => {
      console.log(res);
      setCourses(res.courseLists);
    });
  };
  return (
    <div>
      <Category />
      {courses ? <CourseList courses={courses} /> : null}
    </div>
  );
};

export default Browse;
