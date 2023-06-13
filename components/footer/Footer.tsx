import Link from "next/link";
import TextInput from "../mailingList/TextInput";
import Image from "next/image";
const icons = [
  "facebook",
  "twitter",
  "instagram",
  "linkedin",
  "pinterest",
  "skype",
];
const Footer = () => {
  return (
    <>
      <section className="w-full bg-dark-primary py-[48px] px-5">
        <div className="container grid xl:grid-cols-4 md:grid-cols-3 m-sm:grid-cols-2 font-sans">
          {/* Menu */}
          <div className="flex flex-col gap-4 my-[2rem]">
            <h5 className="text-body-medium text-white font-serif">Menu</h5>
            <ul className="flex flex-col gap-4">
              <li className="text-body-small text-white font-sans leading-global">
                <Link
                  href=""
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  New arrivals
                </Link>
              </li>
              <li className="text-body-small text-white font-sans leading-global">
                <Link
                  href=""
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  Bestsellers
                </Link>
              </li>
              <li className="text-body-small text-white font-sans leading-global">
                <Link
                  href=""
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  Recently viewed
                </Link>
              </li>
              <li className="text-body-small text-white font-sans leading-global">
                <Link
                  href=""
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  Popular this week
                </Link>
              </li>
              <li className="text-body-small text-white font-sans leading-global">
                <Link
                  href=""
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  All products
                </Link>
              </li>
            </ul>
          </div>
          {/* Categories */}
          <div className="flex flex-col gap-4 my-[2rem]">
            <h5 className="text-body-medium text-white font-serif">
              Categories
            </h5>
            <ul className="flex flex-col gap-4">
              <li className="text-body-small text-white font-sans leading-global">
                <Link
                  href=""
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  Crockery
                </Link>
              </li>
              <li className="text-body-small text-white font-sans leading-global">
                <Link
                  href=""
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  Furniture
                </Link>
              </li>
              <li className="text-body-small text-white font-sans leading-global">
                <Link
                  href=""
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  RHomeware
                </Link>
              </li>
              <li className="text-body-small text-white font-sans leading-global">
                <Link
                  href=""
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  Plant pots
                </Link>
              </li>
              <li className="text-body-small text-white font-sans leading-global">
                <Link
                  href=""
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  Chairs
                </Link>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div className="flex flex-col gap-4 my-[2rem]">
            <h5 className="text-body-medium text-white font-serif">
              Our company
            </h5>
            <ul className="flex flex-col gap-4">
              <li className="text-body-small text-white font-sans leading-global">
                <Link
                  href=""
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  About us
                </Link>
              </li>
              <li className="text-body-small text-white font-sans leading-global">
                <Link
                  href=""
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  Careers
                </Link>
              </li>
              <li className="text-body-small text-white font-sans leading-global">
                <Link
                  href=""
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  Contact us
                </Link>
              </li>
              <li className="text-body-small text-white font-sans leading-global">
                <Link
                  href=""
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  Legal & privacy
                </Link>
              </li>
              <li className="text-body-small text-white font-sans leading-global">
                <Link
                  href=""
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  Return policy
                </Link>
              </li>
            </ul>
          </div>
          {/* Mailing list */}
          <div className="flex flex-col gap-4 my-[2rem]">
            <h5 className="text-body-medium text-white font-serif">
              Mailing List
            </h5>
            <TextInput buttonVariant={"light"} variant={"dark"} fullwidth />
          </div>
        </div>
        <hr className="my-[3rem] border-gray-700" />
        {/* Socials */}
        <div className="container flex justify-between flex-wrap items-center gap-[2rem]">
          <p className="text-body-small text-white font-sans">
            Copyright 2023 Avion LTD.
          </p>
          {/* <div className="socials flex gap-3">
            {icons.map((icon, index) => {
              return (
                <Image
                  src={`/icons/${icon}.svg`}
                  alt={icon}
                  width={24}
                  height={24}
                  key={index}
                />
              );
            })}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Footer;
