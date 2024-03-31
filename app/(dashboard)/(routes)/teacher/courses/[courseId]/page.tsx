import React from "react";

type Props = {
  params: {
    courseId: string;
  };
};

const CourseIdPage: React.FC<Props> = ({ params }) => {
  return <div>CourseIdPage {params.courseId}</div>;
};

export default CourseIdPage;
