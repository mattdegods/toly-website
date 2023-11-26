"use client";

import { FC, ReactNode } from "react";
import Image from "next/image";

interface Props {
  title: string;
  children: ReactNode;
  reverse?: boolean;
  id: string;
  image?: string;
}

const Section: FC<Props> = ({
  title,
  children,
  reverse = false,
  id,
  image,
}) => {
  return (
    <section
      className={`w-full py-24 px-10 lg:px-0 ${!reverse && "bg-gray-800"}`}
      id={id}
    >
      <div
        className={`flex items-center ${
          reverse && "flex-row-reverse"
        } justify-center gap-6 max-w-4xl mx-auto text-justify`}
      >
        {image && (
          <Image
            src={image}
            width={250}
            height={250}
            alt="toly branding"
            className="rounded-lg hidden md:block"
          />
        )}
        <div className="flex flex-col items-center md:items-start gap-5">
          <h2 className="text-center md:text-left text-5xl md:text-4xl font-base-b">
            {title}
          </h2>
          {image && (
            <Image
              src={image}
              width={200}
              height={200}
              alt="toly branding"
              className="rounded-lg md:hidden"
            />
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
