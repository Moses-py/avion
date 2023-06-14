import Headline1 from "@/components/typography/Headline1";

const Banner = () => {
  return (
    <>
      <section className="bg-products-banner w-full h-[200px]">
        <div className="flex items-end h-full pb-[2.25rem] container px-[1rem]">
          <Headline1 theme={"light"}>All products</Headline1>
        </div>
      </section>
    </>
  );
};
export default Banner;
