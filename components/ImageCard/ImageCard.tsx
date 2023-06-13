import Image from "next/image";

type Props = {
  image: string;
  name: string;
  price: string;
};

const ImageCard = ({ image, name, price }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <Image
          width={305}
          height={375}
          src={`/images/product/${image}.webp`}
          alt={image}
          className=""
        />
        <p className="m-sm:text-headline-4 text-sans text-dark-primary leading-global text-body-medium ">
          {name}
        </p>
        <p className="m-sm:text-body-large text-sans text-dark-primary leading-global text-body-small ">
          {price}
        </p>
      </div>
    </>
  );
};

export default ImageCard;
