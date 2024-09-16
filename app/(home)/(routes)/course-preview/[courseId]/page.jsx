"use client";

import { getCourseById } from "@/app/_services";
import React, { useEffect, useState } from "react";
import VideoPlayer from "./_components/VideoPlayer";
import Details from "./_components/details";

const CoursePreview = ({ params }) => {
  const [courseDetail, setCourseDetail] = useState([]);

  useEffect(() => {
    params.courseId ? getCourse(params.courseId) : null;
  }, []);

  const getCourse = () => {
    getCourseById(params.courseId).then((response) => {
      console.log(response);
      setCourseDetail(response.courseList);
    });
  };

  return (
    <div>
      <div>
        <div className="flex gap-10 md:flex-row flex-col">
          <div className="col-span-1">
            <VideoPlayer videoUrl={courseDetail.youtubeUrl} />
            <Details courseDetail={courseDetail} />
          </div>
          <div>Enroll Option</div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
