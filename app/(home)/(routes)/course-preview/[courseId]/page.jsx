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
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            fugiat. Hic doloremque, eius eos magnam atque, veritatis at
            necessitatibus omnis deleniti temporibus, repellendus unde ipsum
            debitis consequatur. Consequuntur reprehenderit unde iure tempore!
            Explicabo inventore, corrupti eius consequuntur quod debitis, earum
            porro officiis, dolores illo blanditiis tempora corporis. Optio,
            impedit inventore aperiam voluptates doloremque ad sapiente aliquid
            amet nulla, nemo quasi. Dolor tempore nihil reprehenderit deserunt
            magni excepturi, eius ex? Et, ea nobis. Voluptatem necessitatibus
            recusandae velit corporis culpa, eius expedita voluptate excepturi
            quos cupiditate voluptas ipsum. Aut, non iure.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
