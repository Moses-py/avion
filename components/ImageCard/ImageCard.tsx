import Image from "next/image";

type Props = {
  image: string;
  name: string;
  price: string;
  classname?: string;
  width?: number;
  height?: number;
  span?: boolean;
  onclick?: () => void;
};

const ImageCard = ({
  image,
  name,
  price,
  classname,
  width = 305,
  height = 375,
  span,
  onclick,
}: Props) => {
  return (
    <>
      <div
        className={`flex flex-col gap-3 ${span && "col-span-2"}`}
        onClick={onclick}
      >
        <Image
          width={width}
          height={height}
          src={`/images/product/${image}.webp`}
          alt={image}
          className={`${classname}`}
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
