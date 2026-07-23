import { useState } from "react";
import { BookOpen, Clock, Users, Award, Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

import type { Course } from "@/types";

import Rating from "@/components/ui/Rating";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

interface CourseDetailsProps {
  course: Course;
  onEnroll?: () => void;
}

function CourseDetails({
  course,
  onEnroll,
}: CourseDetailsProps) {

  const navigate = useNavigate();

  const [enrolled, setEnrolled] = useState(() => {
    const saved =
      JSON.parse(localStorage.getItem("enrolledCourses") || "[]");

    return saved.some(
      (item: Course) => item.id === course.id
    );
  });


  const [saved, setSaved] = useState(() => {
    const savedCourses =
      JSON.parse(localStorage.getItem("savedCourses") || "[]");

    return savedCourses.some(
      (item: Course) => item.id === course.id
    );
  });


  const [hasCertificate, setHasCertificate] = useState(() => {
    const certificates =
      JSON.parse(localStorage.getItem("certificates") || "[]");

    return certificates.some(
      (item: any) => item.id === course.id
    );
  });


  const [modal, setModal] = useState<
    "enroll" | "save" | "certificate" | "success" | null
  >(null);


  const saveCourse = () => {

    const courses =
      JSON.parse(localStorage.getItem("savedCourses") || "[]");

    const exists = courses.some(
      (item: Course) => item.id === course.id
    );


    if (!exists) {
      courses.push(course);

      localStorage.setItem(
        "savedCourses",
        JSON.stringify(courses)
      );
    }


    setSaved(true);
    setModal("save");
  };



  const enrollCourse = () => {

    const courses =
      JSON.parse(localStorage.getItem("enrolledCourses") || "[]");


    const exists = courses.some(
      (item: Course) => item.id === course.id
    );


    if (!exists) {
      courses.push(course);

      localStorage.setItem(
        "enrolledCourses",
        JSON.stringify(courses)
      );
    }


    setEnrolled(true);

    setModal("enroll");

    onEnroll?.();
  };



  const requestCertificate = () => {

    const certificates =
      JSON.parse(localStorage.getItem("certificates") || "[]");


    const exists = certificates.some(
      (item: any) => item.id === course.id
    );


    if (!exists) {

      certificates.push({
        id: course.id,
        title: course.title,
        instructor: "Course Instructor",
        date: new Date().toLocaleDateString(),
      });


      localStorage.setItem(
        "certificates",
        JSON.stringify(certificates)
      );


      setHasCertificate(true);

    }


    setModal("success");
  };



  return (
    <>

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="overflow-hidden rounded-xl bg-gray-100">

          {course.image ? (

            <img
              src={course.image}
              alt={course.title}
              className="h-full w-full object-cover"
            />

          ) : (

            <div className="flex h-80 items-center justify-center">

              <BookOpen
                size={70}
                className="text-gray-400"
              />

            </div>

          )}

        </div>



        <div>


          <div className="mb-4 flex items-center gap-3">

            <Badge>
              {course.category}
            </Badge>


            <span className="text-sm text-gray-500">
              {course.level}
            </span>

          </div>



          <h1 className="mb-4 text-3xl font-bold">
            {course.title}
          </h1>



          <p className="mb-6 text-gray-600">
            {course.description}
          </p>



          <Rating
            value={course.rating}
            count={course.students}
          />



          <div className="my-6 grid gap-4 sm:grid-cols-3">


            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock size={18} />
              {course.duration}
            </div>


            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users size={18} />
              {course.students} Students
            </div>


            <div className="flex items-center gap-2 text-sm text-gray-600">
              <BookOpen size={18} />
              {course.lessons} Lessons
            </div>


          </div>



          <div className="flex flex-wrap items-center justify-between gap-4">


            <span className="text-3xl font-bold text-blue-600">
              ${course.price}
            </span>



            <div className="flex flex-wrap gap-3">


              <Button
                variant="outline"
                onClick={saveCourse}
              >
                <Bookmark
                  size={18}
                  className="mr-2 inline"
                />

                {saved ? "Saved" : "Save Course"}

              </Button>



              {!enrolled ? (

                <Button
                  onClick={enrollCourse}
                >
                  Enroll Now
                </Button>

              ) : (

                <Button
                  onClick={() =>
                    setModal("certificate")
                  }
                >
                  <Award
                    size={18}
                    className="mr-2 inline"
                  />

                  {hasCertificate
                    ? "Certificate Issued"
                    : "Get Certificate"}

                </Button>

              )}


            </div>


          </div>


        </div>


      </div>



      <Modal
        open={modal === "save"}
        title="Course Saved"
        onClose={() => setModal(null)}
      >

        <p className="text-gray-600">
          This course has been added to your saved courses.
        </p>

      </Modal>



      <Modal
        open={modal === "enroll"}
        title="Enrollment Successful"
        onClose={() => setModal(null)}
      >

        <p className="text-gray-600">
          You are now enrolled in this course.
        </p>

      </Modal>



      <Modal
        open={modal === "certificate"}
        title="Request Certificate"
        onClose={() => setModal(null)}
      >

        <p className="mb-6 text-gray-600">
          Please confirm that you have completed all course lessons.
        </p>


        <Button
          fullWidth
          onClick={requestCertificate}
        >
          Request Certificate
        </Button>


      </Modal>



      <Modal
        open={modal === "success"}
        title="Certificate Issued"
        onClose={() => setModal(null)}
      >

        <p className="mb-6 text-gray-600">
          Congratulations! Your certificate has been added to your profile.
        </p>


        <Button
          fullWidth
          onClick={() => navigate("/certificates")}
        >
          View Certificates
        </Button>


      </Modal>


    </>
  );
}

export default CourseDetails;
