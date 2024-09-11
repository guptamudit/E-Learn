"use client";

import { getCourseById } from "@/app/_services";
import React, { useEffect, useState } from "react";

const CoursePreview = ({ params }) => {
  const [courseDetail, setCourseDetail] = useState([]);

  useEffect(() => {
    params.courseId ? getCourse(params.courseId) : null;
  }, []);

  const getCourse = () => {
    getCourseById(params.courseId).then((response) => {
      // console.log(response);
      setCourseDetail(response.courseList);
    });
  };

  return <div></div>;
};

export default CoursePreview;
