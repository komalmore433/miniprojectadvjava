import react, { useState } from "react";
import Course from "./Course";

const Allcourses = () => {
  const [courses, setCourses] = useState([
    { title: "Java Course", discription: "this is demo course" },
    { title: "Django Course", discription: "this is demo course" },
    { title: "React Course", discription: "this is demo course" },
    { title: "Angular Course", discription: "this is demo course" },
  ]);
  return (
    <div>
      <h1 className="text-center">All Trains</h1>
      {courses.length > 0
        ? courses.map((item) => <Course course={item} />)
        : "No courses"}
    </div>
  );
};

export default Allcourses;
