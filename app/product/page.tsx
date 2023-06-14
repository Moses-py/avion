"use client";
import Button from "@/components/buttons/Button";
import Exception from "@/components/exception/Exception";
import Footer from "@/components/footer/Footer";
import Showcase from "@/components/showcase/Showcase";
import Headline1 from "@/components/typography/Headline1";
import ParagraphText from "@/components/typography/ParagraphText";
import Image from "next/image";
import { toast } from "react-toastify";
const Product = () => {
  return (
    <>
      <section className="w-full bg-milk p-[2rem] font-sans">
        {/* Text box */}
        <div className="container grid md:grid-cols-2">
          <div className="flex justify-center">
            <Image
              src="/images/product/big_chair.webp"
              alt=""
              width={607}
              height={475}
              className=""
            />
          </div>
          <div className="flex flex-col justify-between p-[24px]">
            <div className="flex flex-col gap-[1rem] mb-[1rem] xl:w-3/4">
              <div>
                <Headline1 theme={"dark"} classname="my-2">
                  The Dandy Chair
                </Headline1>
                <ParagraphText theme="dark" classname="text-headline-3 my-2">
                  $250
                </ParagraphText>
              </div>
              <hr className="border-gray-200" />
              <div>
                <ParagraphText
                  theme="dark"
                  classname="font-serif text-headline-4 my-3"
                >
                  Product description
                </ParagraphText>
                <ParagraphText theme={"dark"} classname="my-2">
                  A timeless design, with premium materials features as one of
                  our most popular and iconic pieces. The dandy chair is perfect
                  for any stylish living space with beech legs and lambskin
                  leather upholstery.
                </ParagraphText>
              </div>
              <div>
                <ParagraphText
                  theme="dark"
                  classname="font-serif text-headline-4 my-3"
                >
                  Dimensions
                </ParagraphText>
                <div className="flex gap-[3rem] my-3">
                  <ParagraphText theme="dark">Height</ParagraphText>
                  <ParagraphText theme="dark">Width</ParagraphText>
                  <ParagraphText theme="dark">Depth</ParagraphText>
                </div>
                <div className="flex gap-[3rem] my-3">
                  <ParagraphText theme="dark">110cm</ParagraphText>
                  <ParagraphText theme="dark">75cm</ParagraphText>
                  <ParagraphText theme="dark">50cm</ParagraphText>
                </div>
              </div>
            </div>
            <div>
              <Button
                variant={"dark"}
                text={"Add to cart"}
                onclick={() => toast("Item added to cart")}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-[130px]">
        <div className="container">
          <Showcase title="You might love these" />
        </div>
      </section>
      <section className="w-full mt-[80px]">
        <div className="container">
          <Exception />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Product;
