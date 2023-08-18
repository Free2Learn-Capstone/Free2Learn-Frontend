// import React from "react";
// import Header from "@components/Header/Header";
// import Footer from "@components/Footer/Footer";
// import { useRouter } from "next/router";

// interface Course {
//   id: number;
//   name: string;
//   instructor: string;
//   duration: string;
//   date: string;
//   time: string;
//   description: string;
//   meetingLink: string;
//   registeredPeople: number;
// }

// const mockEnrolledCourses: Course[] = [
//     {
//         id: 1,
//         name: "Mathematics",
//         instructor: "John Doe",
//         duration: "1 hour",
//         date: "2023-08-01",
//         time: "10:00 AM - 12:00 PM",
//         description: "Advanced mathematics course",
//         meetingLink: "https://example.com/meeting1",
//         registeredPeople: 20,
//       },
//       {
//         id: 2,
//         name: "History",
//         instructor: "Jane Smith",
//         duration: "1 hour",
//         date: "2023-08-02",
//         time: "3:00 PM - 5:00 PM",
//         description: "In-depth history exploration",
//         meetingLink: "https://example.com/meeting2",
//         registeredPeople: 15,
//       },
//       {
//         id: 3,
//         name: "Science",
//         instructor: "Alex Johnson",
//         duration: "1 hour",
//         date: "2023-08-03",
//         time: "9:30 AM - 11:30 AM",
//         description: "Introduction to scientific concepts",
//         meetingLink: "https://example.com/meeting3",
//         registeredPeople: 18,
//       },
// ];

// const CourseDetails = () => {
//   const router = useRouter();
//   const { courseId } = router.query; // Get the courseId from the query parameter

//   // Retrieve course details based on the courseId
//   const courseDetails = mockEnrolledCourses.find(
//     (course) => course.id === Number(courseId)
//   );

//   return (
//     <div className="container">
//       <Header />
//       <main className="mt-5">
//         <div className="row">
//           <div className="col-md-8 mx-auto">
//             {courseDetails ? (
//               <>
//                 <h2>{courseDetails.name}</h2>
//                 <p>Instructor: {courseDetails.instructor}</p>
//                 <p>Duration: {courseDetails.duration}</p>
//                 <p>Date: {courseDetails.date}</p>
//                 <p>Time: {courseDetails.time}</p>
//                 <p>Description: {courseDetails.description}</p>
//                 <p>
//                   Meeting Link:{" "}
//                   <a href={courseDetails.meetingLink}>
//                     {courseDetails.meetingLink}
//                   </a>
//                 </p>
//                 <p>Registered People: {courseDetails.registeredPeople}</p>
//               </>
//             ) : (
//               <p>Loading...</p>
//             )}
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default CourseDetails;
