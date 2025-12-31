import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Register() {
  const [role, setRole] = useState("student");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ role, ...form });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-10 md:py-16">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img
              src={Logo}
              alt="CampusCrib"
              className="w-40 cursor-pointer"
            />
          </Link>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl text-center text-gray-800 mb-2">
          Create an Account
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Join CampusCrib and get started
        </p>

        {/* ROLE SELECTOR */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
          {["student", "landlord"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`flex-1 py-2 text-sm rounded-lg transition ${
                role === r
                  ? "bg-white shadow text-orange-600"
                  : "text-gray-600"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="text-sm text-gray-600">
              {role === "landlord" ? "Business / Full Name" : "Full Name"}
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-600 text-white rounded-xl text-sm hover:bg-orange-700 transition"
          >
            Register as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>

        {/* FOOTER */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-600 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </section>
  );
}