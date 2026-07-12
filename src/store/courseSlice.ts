import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Course } from "@/types";

interface CourseState {
  courses: Course[];
  selectedCourse: Course | null;
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  courses: [],
  selectedCourse: null,
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: "courses",

  initialState,

  reducers: {
    setCourses: (
      state,
      action: PayloadAction<Course[]>
    ) => {
      state.courses = action.payload;
    },

    setSelectedCourse: (
      state,
      action: PayloadAction<Course | null>
    ) => {
      state.selectedCourse = action.payload;
    },

    addCourse: (
      state,
      action: PayloadAction<Course>
    ) => {
      state.courses.push(action.payload);
    },

    updateCourse: (
      state,
      action: PayloadAction<Course>
    ) => {
      const index = state.courses.findIndex(
        (course) => course.id === action.payload.id
      );

      if (index !== -1) {
        state.courses[index] = action.payload;
      }
    },

    removeCourse: (
      state,
      action: PayloadAction<string>
    ) => {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload
      );
    },

    setLoading: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.loading = action.payload;
    },

    setError: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCourses,
  setSelectedCourse,
  addCourse,
  updateCourse,
  removeCourse,
  setLoading,
  setError,
} = courseSlice.actions;

export default courseSlice.reducer;
