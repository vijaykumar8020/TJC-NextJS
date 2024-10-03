import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "../styles/globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function TwoColumnCarousel() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
    <div className="container mx-auto">
      <style jsx global>{`
        .slick-prev,
        .slick-next {
          z-index: 1;
        }
        .slick-prev {
          left: -20px;
          transform: rotate(135deg);
         -webkit-transform: rotate(135deg);
        }
        .slick-next {
          right: -20px;
          transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
        }
        .slick-prev:before,
        .slick-next:before {
          content: "";
          color: #21272A;
          border: solid black;
          border-width: 0 2px 2px 0;
          display: inline-block;
          padding: 3px;
        }
        .company-card-wrapper {
          padding:0 8px;
        }
        .company-card {
          padding: 20px;
          border: 1px solid #DDE1E6;
        }
        .company-logo {
          width: 50px;
          height: 50px;
          object-fit: contain;
          margin-bottom: 10px;
        }
      `}</style>
      <section className="crad-grid-carousel">
      <Slider {...settings}>
        {companies.map((company) => (
           <div key={company.name} className="company-card-wrapper">
          <div key={company.name} className="company-card">
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={100}
              height={100}
              className="company-logo"
            />
            <p>{company.description}</p>
            <h2>{company.title}</h2>
            <h4>{company.subtitle}</h4>
          </div>
          </div>
        ))}
      </Slider>
      </section>
    </div>
  );
}
export default TwoColumnCarousel;