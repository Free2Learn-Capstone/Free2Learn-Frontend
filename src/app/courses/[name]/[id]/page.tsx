'use client'

import React, { useEffect } from 'react';
import {useParams} from 'next/navigation'
import { Queries } from '@/app/helpers/enums';
import { getCourses } from '@/app/store/http/apiReactQuery';
import { useQuery } from '@tanstack/react-query';

const CoursePage = () => {
  const params = useParams();
  const id = params?.id;

  // useEffect(() => {
    const fetchCourse = () => {
      const { isLoading: fetchCoursesInProgress, data: coursesData } = useQuery(
        [Queries.GET_COURSE_BY_ID, {}],
        () => getCourses(null, { id }),
        {
          // onError,
        }
      );

      return { coursesData, fetchCoursesInProgress };
    };

    const { coursesData, fetchCoursesInProgress } = fetchCourse();

    console.log(coursesData);
  // }, [id]);

  return (
    <div>
      <h1>Course Details</h1>
      {/* <p>Course Name: {name}</p> */}
    </div>
  );
};

export default CoursePage;
