import { useState, useContext } from "react";
import { NavLink } from "react-router";
import AuthContext from "../../context";

const menuItems = [
  { label: "Our Tasks", path: "/tasks" },
  { label: "My Tasks", path: "/assignee-me" },
  { label: "Create Task", path: "/create-task" },
];

export const NavBar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav
      className="text-white px-6 py-4 shadow-lg rounded-b-xl "
      style={{
        background: "linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)",
      }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">Task Management</div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-full text-base font-medium transition-all duration-300
                 ${
                   isActive
                     ? "bg-white text-[#7f7fd5] shadow-md"
                     : "hover:bg-white hover:text-[#7f7fd5] hover:shadow"
                 }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:block">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-white text-[#7f7fd5] px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => (window.location.href = "/login")}
              className="bg-white text-[#7f7fd5] px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition"
            >
              Log In
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 md:hidden space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full px-4 py-2 rounded-full text-base font-medium transition-all duration-300
                 ${
                   isActive
                     ? "bg-white text-[#7f7fd5] shadow-md"
                     : "hover:bg-white hover:text-[#7f7fd5] hover:shadow"
                 }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          {/* Auth Buttons - Mobile */}
          {user ? (
            <button
              onClick={handleLogout}
              className="w-full bg-white text-[#7f7fd5] px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => (window.location.href = "/login")}
              className="w-full bg-white text-[#7f7fd5] px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition"
            >
              Log In
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
