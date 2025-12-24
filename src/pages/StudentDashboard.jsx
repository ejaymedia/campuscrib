import LoggedInNavbar from "../components/LoggedInNavbar";
import Footer from "../components/Footer";
import DashboardProfile from "../components/dashboard/DashboardProfile";
import DashboardSavedHostels from "../components/dashboard/DashboardSavedHostels";
import DashboardBookings from "../components/dashboard/DashboardBookings";

export default function StudentDashboard() {
  return (
    <>
      <LoggedInNavbar />

      <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-16">

          {/* PAGE TITLE */}
          <div>
            <h1 className="text-2xl md:text-3xl text-gray-900">
              Student Dashboard
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Manage your profile, saved hostels and bookings
            </p>
          </div>

          <DashboardProfile />
          <DashboardSavedHostels />
          <DashboardBookings />

        </div>
      </main>

      <Footer />
    </>
  );
}
