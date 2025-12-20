import hostel1 from "../../assets/hostel1.jpg";

export default function HostelGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[1,2,3,4].map(i => (
        <div key={i} className="rounded-xl overflow-hidden">
          <img
            src={hostel1}
            alt="Hostel"
            className="w-full h-40 md:h-52 object-cover"
          />
        </div>
      ))}
    </div>
  );
}