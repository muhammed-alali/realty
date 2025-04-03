export default function PropertiesDetay() {
  return (
    <>
      <div className="xs:mx-4 md:container  mx-auto py-[100px]">
        <h1 className="text-3xl font-bold mb-4">Lakeview Haven, Lake Tahoe</h1>
        <p className="text-xl font-semibold mb-2">$250.00/month</p>
        <p className="text-gray-600 mb-4">
          146 Brooklyn Ave, California, New York
        </p>

        {/* Image Gallery */}
        <div className="flex flex-wrap xl:flex-nowrap md:gap-3 xl:gap-0 xl:space-x-4 mb-4">
          <img
            loading="lazy"
            className="xs:w-full xs:h-[300px] xs:mb-4 md:w-[345px] lg:w-[363px] xl:w-[400px]  md:h-[289px] rounded-[30px]"
            src="/photo/house-1.jpg"
            alt="Property 1"
          />
          <img
            loading="lazy"
            className="xs:w-full xs:h-[300px] xs:mb-4   md:w-[345px] lg:w-[363px] xl:w-[400px] md:h-[289px] rounded-[30px]"
            src="/photo/house-2.jpg"
            alt="Property 2"
          />
          <img
            loading="lazy"
            className="xs:w-full xs:h-[300px] xs:mb-4  md:w-[345px] lg:w-[363px] xl:w-[400px] md:h-[289px] rounded-[30px]"
            src="/photo/house-3.jpg"
            alt="Property 3"
          />
        </div>

        {/* Description */}
        <h2 className="text-xl font-semibold mb-2 text-Title">Description</h2>
        <p className="mb-4 text-[16px] text-Desc">
          Located around an hour away from Paris, between the Perche and the
          Iton valley, in a beautiful wooded park bordered by a charming stream,
          this country property immediately seduces with its bucolic and
          soothing environment. An ideal choice for sports and leisure
          enthusiasts who will be able to take advantage of its swimming pool
          (11m x 6m), tennis court, gym, and sauna.
        </p>

        {/* Overview */}
        <h2 className="text-xl font-semibold mt-8 mb-2">Overview</h2>
        <ul className="grid grid-cols-2 gap-4 mb-4">
          <li>
            <strong>ID:</strong> 2297
          </li>
          <li>
            <strong>Type:</strong> House
          </li>
          <li>
            <strong>Garages:</strong> 1
          </li>
          <li>
            <strong>Bedrooms:</strong> 2 Rooms
          </li>
          <li>
            <strong>Bathrooms:</strong> 2 Rooms
          </li>
          <li>
            <strong>Land Size:</strong> 2,000 SqFt
          </li>
          <li>
            <strong>Year Built:</strong> 2022
          </li>
          <li>
            <strong>Size:</strong> 900 SqFt
          </li>
        </ul>

        {/* Video Section */}
        <h2 className="text-xl font-semibold mt-8 mb-2">Video</h2>
        <div className="mb-4">
          <video
            controls
            className="w-full xs:h-[300px] h-[480px] rounded-[30px]"
          >
            <source src="https://youtu.be/MLpWrANjFbI" type="video/mp4" /> Your
          </video>
        </div>

        {/* Amenities and Features */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          Amenities And Features
        </h2>
        <ul className="list-disc ml-5">
          <li>Smoke alarm</li>
          <li>Carbon monoxide alarm</li>
          <li>First aid kit</li>
          <li>Self check-in with lockbox</li>
          <li>Security cameras</li>
          <li>Hangers</li>
          <li>Bed linens</li>
          <li>Extra pillows & blankets</li>
          <li>Iron</li>
          <li>TV with standard cable</li>
          <li>Refrigerator</li>
          <li>Microwave</li>
          <li>Dishwasher</li>
          <li>Coffee maker</li>
        </ul>

        {/* Map Location */}
        <h2 className="text-xl font-semibold mt-8 mb-2">Map Location</h2>
        <div className="mb-4">
          <iframe
            className="w-full xs:h-[300px] rounded-[30px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.373062575326!2d-122.6555662846815!3d38.18106657970766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808587d6b042b4ef%3A0xf677ac9ec7ae38d7!2s146%20Brooklyn%20Ave%2C%20California%2C%20NY%2012260%2C%20USA!5e0!3m2!1sen!2sin!4v1618030868817!5m2!1sen!2sin"
            width="1088"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
