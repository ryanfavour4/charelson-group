import aboutimage from "/assets/images/about-image-1.jpg";
export default function AboutUs() {
  return (
    <div className="wrapper">
    <div className="md:flex">
      <div className="w-full">
        <img src={aboutimage} alt="about image" />
      </div>
      <div className="pl-20 ">
        <h2 className=" text-[16px] text-blue-800 font-bold font-serif pt-2 pb-2 ">
          What We Are About
        </h2>
        <h1 className="text-[30px] font-bold font-serif pb-3 text-blue-950">
          Get to know us
        </h1>
        <p className=" text-gray-700 font-serif pb-2">
          The "About Us" section introduces the organization, giving visitors
          insight into its experience, mission, and commitment to hospitality
          excellence. "We are a trusted hospitality management partner with
          decades of combined experience, offering tailored solutions that
          transform hotels into exceptional guest experiences. By focusing on
          operational excellence, revenue growth, and talent development, we
          ensure lasting success for hotel owners and investors alike." A
          well-placed image of a vibrant hotel lobby enhances visual engagement.
        </p>
        <>
          <h1 className="text-[30px] font-bold font-serif pb-3 text-blue-950">
            Our services include
          </h1>
          <h2 className=" text-[16px] text-blue-800 font-bold font-serif pb-1 ">
            Property Maintenance
          </h2>
          <ul className="list-disc  text-gray-700 font-serif pb-2">
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
          <h2 className=" text-[16px] text-blue-800 font-bold font-serif  pb-1 ">Personalized Concierge Services</h2>
          <ol className="list-disc  text-gray-700 font-serif pb-2 ">
            <li>Errand running and package handling.</li>
            <li>Booking reservations for dining,entertainment and travel.</li>
            <li>Coordinating deliveries and overseeing logistics.</li>
          </ol>
        </>
        <>
          <h2 className=" text-[16px] text-blue-800 font-bold font-serif  pb-1 ">Luxury Lifestyle Management</h2>
          <ol className="list-disc  text-gray-700 font-serif pb-2 font-medium">
            <li>
              Tailored assistance to meet specific client needs and preferences.
            </li>
            <li>Seamless handling of tasks, providing peace of mind.</li>
            <li>
              On-call support for personalized requests and emergencies. With
              Roxbury Leisure Homes, you can sit back, relax and enjoy the
              luxury lifestyle you deserve, without any of the hassle, Our
              unique services is like having your own personal assistant
              available 24/7, ensuring you get all the perks of luxury without
              lifting a finger.
            </li>
          </ol>
        </>
      </div>
    </div>
    </div>
  );
}
