import aboutimage from "/assets/images/about-image-1.jpg";
export default function AboutUs() {
  return (
    <div id="about" className="wrapper md:px-4 px-2 pt-16">
      <div className="md:grid grid-cols-2 place-items-center gap-6">
        <div className="w-full mb-8 md:mb-0 border-2 border-gray-200 rounded-lg overflow-hidden">
          <img src={aboutimage} className="w-full" alt="about image" />
        </div>
        <div className="">
          <h2 className=" text-[16px] text-blue-800 font-bold pt-2 pb-2 ">
            What We Are About
          </h2>
          <h1 className="text-[30px] font-bold pb-3 text-blue-950">
            Get to know us
          </h1>
          <p className=" text-gray-700  pb-4">
            The "About Us" section introduces the organization, giving visitors
            insight into its experience, mission, and commitment to hospitality
            excellence. "We are a trusted hospitality management partner with
            decades of combined experience, offering tailored solutions that
            transform hotels into exceptional guest experiences. By focusing on
            operational excellence, revenue growth, and talent development, we
            ensure lasting success for hotel owners and investors alike." A
            well-placed image of a vibrant hotel lobby enhances visual
            engagement.
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
            <ol className="list-disc list-inside text-gray-700 pb-2 font-medium">
              <li>
                Tailored assistance to meet specific client needs and
                preferences.
              </li>
              <li>Seamless handling of tasks, providing peace of mind.</li>
              <li>
              On-call support for personalized requests and emergencies
              </li>
              <li>Enjoy the benefits of a personal assistant available 24/7 without lifting a finger</li>
            </ol>
          </>
        </div>
      </div>
    </div>
  );
}
