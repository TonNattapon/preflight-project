import React from 'react';

function CourseCard({ course }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{course.title}</div>
        <p className="text-gray-700 text-base">
          {course.description}
        </p>
      </div>
    </div>
  );
}

export default CourseCard;