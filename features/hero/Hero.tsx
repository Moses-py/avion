import Button from "../../components/buttons/Button";
import Headline2 from "../../components/typography/Headline2";

const Hero = () => {
  return (
    <>
      <section className="block m-sm:hidden w-full">
        <div className="bg-white py-[32px] px-[32px] md:py-[48px] md:px-[56px] flex flex-col gap-[1rem] w-full">
          <div>
            <Headline2 theme={"dark"} classname="leading-global">
              Luxury homeware for people who love timeless design quality
            </Headline2>
            <p className="m-sm:text-body-large leading-global my-[12px] m-sm:my-[20px] font-serif text-bold-medium text-body-gray">
              With our new collection, view over 400 bespoke pieces from
              homeware through to furniture today
            </p>
          </div>
          <div>
            <Button variant={"gray"} text={"View collection"} fullwidth />
          </div>
        </div>
      </section>
      <section className="bg-center bg-cover bg-hero-small bg-no-repeat m-sm:bg-hero py-[130px] w-full">
        <div className="hidden container items-center w-full m-sm:flex justify-center lg:justify-end">
          <div className="bg-white py-[32px] px-[32px] md:py-[48px] md:px-[56px] flex flex-col gap-[8rem] min-w-[320px] w-[630px]">
            <div>
              <Headline2 theme={"dark"} classname="leading-global">
                Luxury homeware for people who love timeless design quality
              </Headline2>
              <p className="m-sm:text-body-large leading-global my-[20px] font-serif text-bold-medium text-body-gray">
                Shop the new Spring 2023 collection today
              </p>
            </div>
            <div>
              <Button variant={"gray"} text={"View collection"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
