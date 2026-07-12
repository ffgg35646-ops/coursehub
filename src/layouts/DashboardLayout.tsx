import { Outlet, NavLink } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto flex gap-6 py-8">
        <aside className="w-64 rounded-lg bg-white p-5 shadow-sm">
          <nav className="flex flex-col gap-3">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-600"
                  : "text-gray-700"
              }
            >
              Profile
            </NavLink>

            <NavLink
              to="/my-courses"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-600"
                  : "text-gray-700"
              }
            >
              My Courses
            </NavLink>
          </nav>
        </aside>

        <section className="flex-1 rounded-lg bg-white p-6 shadow-sm">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default DashboardLayout;
