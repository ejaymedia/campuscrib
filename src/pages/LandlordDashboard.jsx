import LandlordNavbar from "../components/landlord/LandlordNavbar";
import Footer from "../components/Footer";
import AddHostelForm from "../components/landlord/AddHostelForm";
import ManageListings from "../components/landlord/ManageListings";
import BookingsOverview from "../components/landlord/BookingsOverview";
import EarningsSummary from "../components/landlord/EarningsSummary";

export default function LandlordDashboard() {
  return (
    <>
      <LandlordNavbar />

      <main className="pt-32 pb-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">

          <h1 className="text-2xl md:text-3xl text-gray-900">
            Landlord Dashboard
          </h1>

          <EarningsSummary />
          <AddHostelForm />
          <ManageListings />
          <BookingsOverview />

        </div>
      </main>

      <Footer />
    </>
  );
}