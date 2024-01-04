
import React, { useState } from "react";
import courseData from "../data";

const Button = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  const [values, setValues] = useState({ title: "", prereqs: "", antireqs: "" });

  function searchCourse(courseCode) {
    const foundCourse = courseData.find((course) => course.courseCode === courseCode);

    if (foundCourse) {
      const title = foundCourse.courseTitle;
      const prereqs = foundCourse.prereqs || "None";
      const antireqs = foundCourse.antireqs || "None";


      return { title, prereqs, antireqs };
    } else {
      return "Course not found";
    }
  }

  function Helper(data) {
    setPrint(true);
    const { title, prereqs, antireqs } = searchCourse(data);
    setValues({ title, prereqs, antireqs });
  }

  function getData(val) {
    setData(val.target.value);
    setPrint(false);
    console.warn(val.target.value);
  }

  return (
    <div className="interface">
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => Helper(data)}>Find Prereqs</button>
      {print ? (
        <div>
          <h2> Course Title:<u>{values.title}</u> </h2>
          <h2> Prerequisite Requirements: <u>{values.prereqs}</u> </h2>
          <h2>Antirequisite Substitution: <u>{values.antireqs}</u></h2>
        </div>
      ) : null}
    </div>
  );
};

export default Button;
