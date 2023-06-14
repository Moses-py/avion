import FeatureCard from "@/app/(site)/features/feature/FeatureCard";
import React from "react";
import Headline3 from "../typography/Headline3";
import { features } from "@/mocks/_mocks_";

const Exception = () => {
  return (
    <>
      <div className="flex justify-center container">
        <Headline3 theme={"dark"}>What makes our brand different</Headline3>
      </div>
      <div className="container flex justify-center my-[80px]">
        <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            return (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                content={feature.content}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Exception;
