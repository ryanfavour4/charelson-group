import aboutimage from "/assets/images/about-image-1.jpg";
export default function AboutUs() {
  return (
    <div id="about" className="wrapper md:px-4 px-2 pt-16">
      <div className="md:grid grid-cols-2 place-items-center gap-6">
        <div className="w-full mb-8 md:mb-0 border-2 border-gray-200 rounded-lg overflow-hidden ">
          <img data-aos="fade-right"src={aboutimage} className="w-full " alt="about image" />
        </div>
        <div  data-aos="fade-left" className="">
          <h2 className=" text-[16px] text-blue-800 font-bold pt-2 pb-2 ">
            What We Are About
          </h2>
          <h1 className="text-[30px] font-bold pb-3 text-blue-950">
            Get to know us
          </h1>
          <p className=" text-gray-700  pb-4">
            Welcome to Charleson Group, where exceptional service meets
            effortless luxury. We specialize in elevating the living experience
            for owners of mid-range to luxury apartments. With a flat fee of
            1500 Euros per month, we provide a range of premium services
            designed to take care of all the details so you can enjoy the
            lifestyle you deserve. From property maintenance and concierge
            services to luxury lifestyle management, we are here to offer a
            seamless, personalized experience that meets your needs.
          </p>
          <>
            <h1 className="text-[30px] font-bold  pb-3 text-blue-950">
              Our services include
            </h1>
            <h2 className=" text-[16px] text-blue-800 font-bold pb-1 ">
              Property Maintenance
            </h2>
            <ul className="list-disc list-inside text-gray-700  pb-5">
              <li>Regular cleaning to keep your property spotless</li>
              <li>
                maintenance and handling of repairs or issues that may arise
              </li>
              <li>
                Coordination with third-party services like HomeServe for
                specialized maintenance needs.
              </li>
            </ul>
          </>
          <>
            <h2 className=" text-[16px] text-blue-800 font-bold pb-1 ">
              Personalized Concierge Services
            </h2>
            <ol className="list-disc list-inside text-gray-700 pb-5">
              <li>Errand running and package handling.</li>
              <li>Booking reservations for dining,entertainment and travel.</li>
              <li>Coordinating deliveries and overseeing logistics.</li>
            </ol>
          </>
          <>
            <h2 className=" text-[16px] text-blue-800 font-bold  pb-1 ">
              Luxury Lifestyle Management
            </h2>
            <ol className="list-disc list-inside text-gray-700 pb-2 ">
              <li>
                Tailored assistance to meet specific client needs and
                preferences.
              </li>
              <li>Seamless handling of tasks, providing peace of mind.</li>
              <li>On-call support for personalized requests and emergencies</li>
              <li>
                Enjoy the benefits of a personal assistant available 24/7
                without lifting a finger
              </li>
            </ol>
          </>
        </div>
      </div>
    </div>
  );
}
