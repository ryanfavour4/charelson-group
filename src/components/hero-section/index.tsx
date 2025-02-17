import { useEffect, useState } from "react";

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "/assets/images/hero-image-1.jpg",
        "/assets/images/hero-image-2.jpg",
        "/assets/images/hero-image-3.jpg",
    ];
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <>
            <header className="">
                {/* HERO BG AREA */}
                <div className="relative z-10 flex h-1/2 min-h-[630px] flex-col items-center justify-center overflow-hidden bg-cover bg-center text-light">
                    {/* OVERLAY & HERO IMAGE */}
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt="hero-bg"
                            className={`absolute inset-0 -z-10 h-1/2 min-h-[630px] w-full object-cover transition-opacity duration-1000 filter ${
                                index === currentIndex
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                            width={2000}
                            height={800}
                        />
                    ))}
                    <div className="absolute inset-0 -z-10 bg-blue-950 opacity-70" />

                    {/* HERO CONTENT */}
                    <div  data-aos="fade-up" className="wrapper absolute inset-0 flex h-full flex-col justify-between gap-16 p-3 text-light">
                        {/* TOP SECTION */}
                        <div className="flex h-full flex-col justify-center">
                            <h1 className="mb-10 max-w-[600px] text-5xl font-bold md:text-6xl md:leading-snug">
                                We offer you luxury and premium comfort{" "}
                            </h1>
                            <p className="mb-10 max-w-[600px] text-lg font-light md:text-xl md:leading-snug">
                                Our premium service delivery sets us apart from
                                the competition as we deliver the best services
                                in a timely fashion.
                            </p>
                            <div className="flex flex-col gap-6 md:flex-row">
                                <a
                                    className="btn-white max-w-fit px-8 py-3"
                                    href="#"
                                >
                                    Explore More
                                </a>
                                <a
                                    className=""
                                    href="#contact"><button className="btn flex w-fit items-center gap-1 p-2 ring-light/50">
                                    
                                    <p>Contact now</p>
                                </button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

