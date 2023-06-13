import TextInput from "@/components/mailingList/TextInput";
import Headline2 from "@/components/typography/Headline2";
import ParagraphText from "@/components/typography/ParagraphText";

const Newsletter = () => {
  return (
    <>
      <section className="w-full bg-newsletter-bg bg=center bg-cover bg-no-repeat py-[97px] px-5">
        <div className="grid place-items-center text-center">
          <div className="flex flex-col gap-[2rem]">
            <Headline2 theme={"light"}>
              Join the club and get the benefits
            </Headline2>
            <ParagraphText theme={"light"} classname="text-body-large">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </ParagraphText>
          </div>
          <div className="my-[3rem] w-full md:w-1/2">
            <TextInput buttonVariant={"dark"} variant={"light"} fullwidth />
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
