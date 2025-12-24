import HostelHeader from "../components/hostel-details/HostelHeader";
import HostelGallery from "../components/hostel-details/HostelGallery";
import HostelInfo from "../components/hostel-details/HostelInfo";
import HostelAmenities from "../components/hostel-details/HostelAmenities";
import HostelBookingCard from "../components/hostel-details/HostelBookingCard";
import LoggedInNavbar from "../components/LoggedInNavbar";
import Footer from "../components/Footer";

export default function HostelDetails() {
  return (
    <section>
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <LoggedInNavbar />

        <HostelHeader />

        <HostelGallery />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 pb-16">

          <div className="md:col-span-2 space-y-8">
            <HostelInfo />
            <HostelAmenities />
          </div>

          <HostelBookingCard />

        </div>
      </div>

      <Footer />

    </section>
  );
}