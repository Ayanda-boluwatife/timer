"use client";

import data from "./data.json";
import { React, useState } from "react";

const timeFrames = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
];

const borderColors = [
    'border-t-[40px] border-Light-red-work',
    'border-t-[40px] border-Soft-blue-play',
    'border-t-[40px] border-Light-red-study',
    'border-t-[40px] border-Lime-green-exercise',
    'border-t-[40px] border-Violet-social',
    'border-t-[40px] border-Soft-orange-self-care',
  ];

//   const icons = [
//     '/images/icon-work.svg',
//     '/images/icon-play.svg',
//     '/images/icon-study.svg',
//     '/images/icon-exercise.svg',
//     '/images/icon-social.svg',
//     '/images/icon-self-care.svg',
//   ];

export default function Main() {
  const [activeTimeFrame, setActiveTimeFrame] = useState("daily");

  const handleTimeFrameClick = (timeFrame) => {
    setActiveTimeFrame(timeFrame);
  };

  const getTimeFrameData = (title) => {
    const selectedData = data.find((item) => item.title === title);
    return selectedData.timeframes[activeTimeFrame];
  };

  return (
    <section className="bg-dark-500">
      <div className="container">
        <div className="p-4 lg:flex justify-center items-center h-[100vh] gap-4">
         <div>
          <div className=" bg-[#1D204B] h-[70vh] rounded-2xl">
            <div className="bg-[#5746EA] h-[50vh] rounded-2xl p-10">
                <div>
                    <img className="h-[70px]" src="/images/image-jeremy.png" alt="" />
                </div>
                <div className="mt-8">
                <h2 className="text-[#9186FF] font-medium leading-loose">Report For</h2>
                <h1 className="leading-relaxed text-[3vw] text-[#FBFBFF]">Jeremy <br /> Robson </h1>
                </div>
            </div>
            {timeFrames.map((timeFrame) => (
              <button
                key={timeFrame.value}
                onClick={() => handleTimeFrameClick(timeFrame.value)}
                className={`mr-2 px-4 py-2 rounded-md transition-all mt-14 duration-500 ${
                  activeTimeFrame === timeFrame.value ? "text-[#FBFBFF]" : "text-[#66699C] hover:text-[#FBFBFF]"
                }`}
              >
                {timeFrame.label}
              </button>
            ))}
          </div>
         </div>
          <div className="lg:grid grid-cols-3 gap-4 h-[70vh]">
            {data.map((item, index) => (
              <div key={item.title} className={`bg-[#1D204B] transition-all duration-500 rounded-md p-8 lg:w-[220px] md:w-full shadow  ${borderColors[index % borderColors.length]}`} >
                <h2 className="text-lg text-[#EAECFF] font-semibold">{item.title}</h2>
                <p className="text-2xl text-[#EAECFF] font-bold mt-2">
                  {getTimeFrameData(item.title).current}hrs
                </p>
                <p className="text-gray-500 font-medium leading-loose mt-1">
                  Last Week: {getTimeFrameData(item.title).previous}hrs
                </p>
                {/* <img src={icons[index % icons.length]} className="absolute bottom-0 right-0 transform translate-x-3 translate-y-3 h-6 w-6" alt="Icon" /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
