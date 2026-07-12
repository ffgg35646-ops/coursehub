import { Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import CourseDetails from "@/pages/CourseDetails";
import Learning from "@/pages/Learning";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Profile from "@/pages/Profile";
import NotFound from "@/pages/NotFound";

import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/courses/:slug"
          element={<CourseDetails />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

        <Route element={<ProtectedRoute />}>
          <Route
            path="/learning/:id"
            element={<Learning />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;
