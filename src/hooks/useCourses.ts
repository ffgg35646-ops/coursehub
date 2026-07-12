import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "@/store";
import { setCourses, setLoading, setError } from "@/store/courseSlice";
import { courses } from "@/data/courses";

export const useCourses = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    courses: courseList,
    loading,
    error,
  } = useSelector(
    (state: RootState) => state.courses
  );

  useEffect(() => {
    const loadCourses = async () => {
      try {
        dispatch(setLoading(true));

        // Temporary local data.
        // Later this will be replaced with API request.
        dispatch(setCourses(courses));
      } catch {
        dispatch(
          setError("Failed to load courses")
        );
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (courseList.length === 0) {
      loadCourses();
    }
  }, [dispatch, courseList.length]);

  return {
    courses: courseList,
    loading,
    error,
  };
};
