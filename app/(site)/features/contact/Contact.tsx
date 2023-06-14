import Button from "@/components/buttons/Button";
import Headline3 from "@/components/typography/Headline3";
import ParagraphText from "@/components/typography/ParagraphText";
import Image from "next/image";

const Contact = () => {
  return (
    <div className=" w-full grid md:grid-cols-2 gap-4 md:items-center lg:items-stretch justify-items-center mt-[80px]">
      {/* Text box */}
      <div className="w-full p-[32px] xl:p-[64px] bg-white flex flex-col justify-between">
        <div className="flex flex-col gap-[1rem] mb-[1rem] xl:w-3/4">
          <Headline3 theme={"dark"}>
            From a studio in London to a global brand with over 400 outlets
          </Headline3>
          <ParagraphText theme={"dark"}>
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market. <br />
            <br /> Handmade, and lovingly crafted furniture and homeware is what
            we live, breathe and design so our Chelsea boutique become the
            hotbed for the London interior design community.
          </ParagraphText>
        </div>
        <div>
          <Button variant={"gray"} text={"Get in touch"} />
        </div>
      </div>

      {/* Image */}
      <div className="w-full">
        <Image
          src="/images/homepage/contact_chair.jpg"
          alt="block"
          width={630}
          height={478}
          className="min-w-[200px] w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Contact;
