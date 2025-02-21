import React from "react";

const communityImages = [
  "/community1.jpg",
  "/community2.jpg",
  "/community3.jpg",
  "/community4.jpg",
];

const EventVideoPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section (Video) */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <div className="absolute inset-0 bg- opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white">
          <h1 className="text-4xl font-bold">Join Us for the Tech Summit 2025</h1>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="w-full max-w-5xl mx-auto mb-8">
        <iframe
          className="w-full h-[500px] rounded-lg shadow-xl"
          src="https://www.youtube.com/embed/your-video-id"  // Replace with actual YouTube video ID
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* DEN Community Images Section (1 row, 2 columns) */}
      <div className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Community in Action</h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {communityImages.slice(0, 2).map((image, index) => (
            <div key={index} className="w-full h-56 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src={image}
                alt={`Community Image ${index + 1}`}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventVideoPage;
