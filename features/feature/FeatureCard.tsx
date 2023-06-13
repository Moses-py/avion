import ParagraphText from "@/components/typography/ParagraphText";
import Image from "next/image";

type Props = {
  icon: string;
  title: string;
  content: string;
};

const FeatureCard = ({ icon, title, content }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-3 p-[3rem] lg:p-[1.5rem] xl:p-[3rem] bg-border-gray w-full">
        <Image width={24} height={24} src={`/icons/${icon}.svg`} alt={icon} />
        <h4 className="text-headline-4 text-dark-primary leading-global">
          {title}
        </h4>
        <ParagraphText theme={"dark"}>{content}</ParagraphText>
      </div>
    </>
  );
};

export default FeatureCard;
