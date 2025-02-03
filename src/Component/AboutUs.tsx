import aboutImages1 from "../assets/images/aboutimage1.jpg";
import aboutImages2 from "../assets/images/aboutimage2.jpg";
import aboutImages3 from "../assets/images/aboutimage3.jpg";
import aboutImages4 from "../assets/images/aboutimage4.jpg";

export default function AboutUs() {
    return (
        <article className="about-us-body">
            <div className="about-us-content">
                <h3>About Us</h3>

                <h2>
                    Welcome to <span>Charleson Group</span>
                </h2>

                <p>
                    The "About Us" section introduces the organization, giving
                    visitors insight into its experience, mission, and
                    commitment to hospitality excellence. "We are a trusted
                    hospitality management partner with decades of combined
                    experience, offering tailored solutions that transform
                    hotels into exceptional guest experiences. By focusing on
                    operational excellence, revenue growth, and talent
                    development, we ensure lasting success for hotel owners and
                    investors alike." A well-placed image of a vibrant hotel
                    lobby enhances visual engagement.
                </p>
                <button>Discover more</button>
            </div>
            <div className="about-us-images">
                <div className="image-container">
                    <img src={aboutImages1} alt="about images1" />
                </div>
                <div className="image-container">
                    <img src={aboutImages2} alt="about images2" />
                </div>
                <div className="image-container">
                    <img src={aboutImages3} alt="about images3" />
                </div>
                <div className="image-container">
                    <img src={aboutImages4} alt="about images4" />
                </div>
            </div>
        </article>
    );
}
