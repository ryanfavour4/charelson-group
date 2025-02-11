import officeimage1 from "/assets/images/office-1.jpg";
import officeimage2 from "/assets/images/office-2.jpg";
import officeimage3 from "/assets/images/office-3.jpg";
import officeimage4 from "/assets/images/office-4.jpg";

export default function OfficeSection() {
  return (
    <div id="offices" className="pb-10 md:px-14 px-5">
      <div className="text-center">
      <h2 className=" text-[22px] text-primary/50 font-bold pt-12 ">
            Gallery
          </h2>
          <h1 className="text-[40px] font-bold pb-14 text-primary">
            Our Space
          </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div data-aos="flip-left" className="border-2 border-gray-500 rounded-lg overflow-hidden h-72">
          <img
            src={officeimage1}
            alt="about image"
            className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500 active:scale-105"
          />
        </div>
        <div data-aos="flip-right" className="border-2 border-gray-500 rounded-lg overflow-hidden h-72">
          <img
            src={officeimage2}
            alt="about image"
            className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500 active:scale-105"
          />
        </div>
        <div data-aos="flip-left" className="border-2 border-gray-500 rounded-lg overflow-hidden h-72">
          <img
            src={officeimage3}
            alt="about image"
            className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500 active:scale-105"
          />
        </div>
        <div data-aos="flip-right" className="border-2 border-gray-500 rounded-lg overflow-hidden h-72">
          <img
            src={officeimage4}
            alt="about image"
            className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500 active:scale-105"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <a href="#contact" className=""><button className="bg-primary px-12 py-3 rounded-full mt-10 text-white font-bold ">
          Get in Touch
        </button></a>
      </div>
    </div>
  );
}
