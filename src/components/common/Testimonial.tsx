"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import { ScrollAnimate } from "./ScrollAnimate";
import Male1 from "@/assets/avatar/male1.png";
import Male2 from "@/assets/avatar/male2.png";
import Female1 from "@/assets/avatar/female1.png";
import Female2 from "@/assets/avatar/female2.png";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    avatar: Male1,
    content: "Paytonic has made managing my bills so much easier!",
    author: "Alex Johnson",
    job: "Software Engineer",
  },
  {
    id: 2,
    avatar: Male2,
    content: "I love how secure and user-friendly Paytonic is.",
    author: "Brenda Lee",
    job: "Financial Analyst",
  },
  {
    id: 3,
    avatar: Male2,
    content: "With Paytonic, I can transfer money instantly and hassle-free.",
    author: "Carlos Martinez",
    job: "Bank Teller",
  },
  {
    id: 4,
    avatar: Female1,
    content: "Paytonic's customer service is top-notch!",
    author: "Diana King",
    job: "Customer Service Representative",
  },
  {
    id: 5,
    avatar: Male1,
    content: "Using Paytonic has simplified my financial life.",
    author: "Edward Smith",
    job: "Accountant",
  },
  {
    id: 6,
    avatar: Female2,

    content: "Paytonic offers the best interest rates on savings.",
    author: "Fiona Clark",
    job: "Financial Advisor",
  },
  {
    id: 7,
    avatar: Male1,

    content: "The budgeting tools in Paytonic are incredibly helpful.",
    author: "George Adams",
    job: "Budget Analyst",
  },
  {
    id: 8,
    avatar: Female1,

    content: "Paytonic's mobile app is very intuitive and easy to use.",
    author: "Hannah Brown",
    job: "UX Designer",
  },
  {
    id: 9,
    avatar: Male2,

    content:
      "I've never felt more in control of my finances thanks to Paytonic.",
    author: "Isaac Green",
    job: "Business Analyst",
  },
];

const Testimonial = () => {
  const [slidesPerView, setSlidesPerView] = useState(2);

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(2);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="w-full">
      <div className="flex flex-col max-width">
        <ScrollAnimate>
          <h3 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text text-center mb-6">
            Happy Customers
          </h3>

          <p className="text-lg text-center text-gray-500">
            Read what our customers have to say about us.
          </p>
        </ScrollAnimate>
        <ScrollAnimate>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="h-full max-h-[300px] mt-10 rounded-3xl"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="pb-32">
                <div className="flex flex-col gap-6 text-start p-10">
                  <div className="flex items-center gap-2">
                    <Star className="fill-current text-yellow-500" />
                    <Star className="fill-current text-yellow-500" />
                    <Star className="fill-current text-yellow-500" />
                    <Star className="fill-current text-yellow-500" />
                    <Star className="fill-current text-yellow-500" />
                  </div>
                  <p className="text-lg lg:text-xl font-semibold text-gray-900">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-x-3">
                    <div className="h-16 w-16">
                      <Image
                        className="h-full w-full object-cover rounded-full"
                        src={testimonial.avatar}
                        alt={testimonial.author}
                      />
                    </div>
                    <div>
                      <p className="text-lg font-bold">{testimonial.author}</p>
                      <p>{testimonial.job}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default Testimonial;
