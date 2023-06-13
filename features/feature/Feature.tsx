import Headline3 from "@/components/typography/Headline3";
import FeatureCard from "./FeatureCard";
import ImageCard from "@/components/ImageCard/ImageCard";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import Headline2 from "@/components/typography/Headline2";
import ParagraphText from "@/components/typography/ParagraphText";
const features = [
  {
    icon: "delivery",
    title: "Next day as standard",
    content: "Order before 3pm and get your order the next day as standard",
  },
  {
    icon: "checkmark",
    title: "Made by true artisans",
    content: "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    icon: "purchase",
    title: "Unbeatable prices",
    content:
      "For our materials and quality you won’t find better prices anywhere",
  },
  {
    icon: "sprout",
    title: "Recycled packaging",
    content: "We use 100% recycled to ensure our footprint is more manageable",
  },
];

const products = [
  { image: "chair", name: "The Dandy Chair", price: "$250" },
  { image: "clay_pot", name: "Rustic Vase Set", price: "$155" },
  { image: "gourd", name: "Silky Vase", price: "$125" },
  { image: "lamp", name: "Lucy Lamp", price: "$399" },
];

const Feature = () => {
  return (
    <>
      <section className="w-full my-[80px] p-5">
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

        <div className="container flex flex-col justify-center mt-[130px]">
          <div className="grid m-sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 w-full">
            {products.map((product, index) => {
              return (
                <ImageCard
                  key={index}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                />
              );
            })}
          </div>
          <div className="flex justify-center my-[50px] lg:my-[80px]">
            <Button variant={"gray"} text={"View collection"} />
          </div>
        </div>
        <div className="container grid md:grid-cols-2 gap-4 justify-items-center">
          {/* Text box */}
          <div className="w-full p-[32px] xl:p-[64px] bg-dark-primary flex flex-col justify-between gap-[1rem]">
            <div className="flex flex-col gap-[1rem] mb-[1rem] xl:w-3/4">
              <Headline2 theme={"light"}>
                It started with a small idea
              </Headline2>
              <ParagraphText theme={"light"}>
                A global brand with local beginnings, our story begain in a
                small studio in South London in early 2014
              </ParagraphText>
            </div>
            <div>
              <Button variant={"gray"} text={"View collection"} />
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
