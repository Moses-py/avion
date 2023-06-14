"use client";
import ImageCard from "@/components/ImageCard/ImageCard";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import Headline2 from "@/components/typography/Headline2";
import ParagraphText from "@/components/typography/ParagraphText";
import { ceramics, features, popular } from "@/mocks/_mocks_";
import Showcase from "@/components/showcase/Showcase";
import Exception from "@/components/exception/Exception";
import { useRouter } from "next/navigation";

const Feature = () => {
  const router = useRouter();
  return (
    <>
      <section className="w-full my-[80px] p-5">
        <Exception />
        {/* New ceramics */}
        <div className="container flex flex-col justify-center mt-[130px]">
          <div className="my-8">
            <Headline2 theme={"dark"}>New Ceramics</Headline2>
          </div>

          <div className="grid m-sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 w-full">
            {ceramics.map((ceramic, index) => {
              return (
                <ImageCard
                  key={index}
                  image={ceramic.image}
                  name={ceramic.name}
                  price={ceramic.price}
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

        {/* Our popular ceramics */}
        <Showcase title="Our popular products" />

        {/* Small idea */}

        <div className="container grid md:grid-cols-2 gap-4 justify-items-center">
          {/* Text box */}
          <div className="w-full p-[32px] xl:p-[64px] bg-dark-primary flex flex-col justify-between gap-[1rem]">
            <div className="flex flex-col gap-[1rem] mb-[1rem] xl:w-3/4">
              <Headline2 theme={"light"}>
                It started with a small idea
              </Headline2>
              <ParagraphText theme={"light"}>
                A global brand with local beginnings, our story began in a small
                studio in South London in early 2014
              </ParagraphText>
            </div>
            <div>
              <Button
                variant={"gray"}
                text={"View collection"}
                onclick={() => router.push("/products")}
              />
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <Image
              src="/images/homepage/block.webp"
              alt="block"
              width={630}
              height={478}
              className="min-w-[200px] w-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
