import Image from 'next/image';
import React from 'react'

type Props = {}

function CourseListingCard(props : any) {
  const { course , index} = props;

  return (
    <div className="col">
      <div className="card shadow-sm">
        <Image src={`https://source.unsplash.com/random/800x600?sig=${index}`} alt='course'/>
        <div className="card-body">
          <p className="card-text">
           {course.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseListingCard