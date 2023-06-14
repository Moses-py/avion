"use client";
import { popular } from "@/mocks/_mocks_";
import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import Button from "../buttons/Button";
import Headline2 from "../typography/Headline2";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
};

const Showcase = ({ title }: Props) => {
  const router = useRouter();
  return (
    <>
      <div className="container flex flex-col justify-center">
        <div className="my-8 w-full container">
          <Headline2 theme={"dark"}>{title}</Headline2>
        </div>

        <div className="grid m-sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 w-full">
          {popular.map((item, index) => {
            if (index === 0) {
              return (
                <ImageCard
                  key={index}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  width={630}
                  span
                />
              );
            }
            return (
              <ImageCard
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
        <div className="flex justify-center my-[50px] lg:my-[80px]">
          <Button
            variant={"gray"}
            text={"View collection"}
            onclick={() => router.push("/products")}
          />
        </div>
      </div>
    </>
  );
};

export default Showcase;
