import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";


const HeroSection = () => {
  return (
    <div className="h-[100vh] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:p-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="whitesmoke"
      />
      <div className="p-4 relative z-10 text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
          facere! Impedit explicabo, neque officiis, reprehenderit ut voluptatem
          consectetur minus magnam magni hic, tempora fugit! Eaque perspiciatis
          sint vitae voluptatum iure?
        </p>
        <div className="mt-4">
          <Link href={"/courses"} className="cursor-pointer">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-black cursor-pointer"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
