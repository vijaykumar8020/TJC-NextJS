import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function TwoColumnCarousel() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const companies = [
    {
      logo: "https://picsum.photos/seed/picsum/2000/1000",
      name: "Company 1",
      title: "Product Manager",
      subtitle: "Tech Industry",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      logo: "https://picsum.photos/seed/picsum/2000/1000",
      name: "Company 2",
      title: "Software Engineer",
      subtitle: "Finance Sector",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      logo: "https://picsum.photos/seed/picsum/2000/1000",
      name: "Company 3",
      title: "Marketing Specialist",
      subtitle: "E-commerce",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      logo: "https://picsum.photos/seed/picsum/2000/1000",
      name: "Company 4",
      title: "Data Analyst",
      subtitle: "Healthcare",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      logo: "https://picsum.photos/seed/picsum/2000/1000",
      name: "Company 5",
      title: "Data Analyst",
      subtitle: "Healthcare",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      logo: "https://picsum.photos/seed/picsum/2000/1000",
      name: "Company 6",
      title: "Data Analyst",
      subtitle: "Healthcare",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
   
  ];

  return (
    <div className="slider-container">
      <style jsx global>{`
        .slick-prev,
        .slick-next {
          z-index: 1;
        }
        .slick-prev {
          left: 10px;
        }
        .slick-next {
          right: 10px;
        }
        .slick-prev:before,
        .slick-next:before {
          color: black;
        }
        .company-card {
          padding: 20px;
          margin: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
          max-width: 80%;
          margin-left: 40px;
        }
        .company-logo {
          width: 50px;
          height: 50px;
          object-fit: contain;
          margin-bottom: 10px;
        }
      `}</style>
      <Slider {...settings}>
        {companies.map((company, index) => (
          <div key={index} className="company-card">
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={100}
              height={100}
              className="company-logo"
            />
            <h2>{company.name}</h2>
            <h3>{company.title}</h3>
            <h4>{company.subtitle}</h4>
            <p>{company.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default TwoColumnCarousel;