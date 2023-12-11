// duolingo-clone/src/components/CourseList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the backend
    axios.get('/api/courses').then(response => {
      setCourses(response.data);
    });
  }, []);

  return (
    <div>
      {/* Render courses */}
    </div>
  );
};

export default CourseList;
