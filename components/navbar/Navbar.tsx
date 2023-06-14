import Link from "next/link";
import Headline3 from "../typography/Headline3";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <header className="w-full pt-10 px-10">
        <nav className="flex justify-between items-center">
          <Headline3 theme={"dark"}>Avion</Headline3>
          <div className="hidden flex-col gap-1 hover:gap-2 transition-all ease-linear duration-200 cursor-pointer">
            <span className="w-[40px] h-[2px] bg-gray-800 items-center" />
            <span className="w-[40px] h-[2px] bg-gray-800 items-center" />
            <span className="w-[40px] h-[2px] bg-gray-800 items-center" />
          </div>
          <div className="flex text-body-medium justify-between items-center gap-[2rem]">
            <ul className="flex gap-6 items-center justify-center">
              <li className="text-nav">
                <Link href="/">Home</Link>
              </li>
            </ul>
            <ul className="flex gap-6 items-center justify-center">
              <li className="text-nav">
                <Link href="/">
                  <Image
                    src="/icons/search.svg"
                    alt="search icon"
                    height={15}
                    width={15}
                  />
                </Link>
              </li>
              <li className="text-nav">
                <Link href="/cart">
                  <Image
                    src="/icons/cart.svg"
                    alt="cart icon"
                    height={15}
                    width={15}
                  />
                </Link>
              </li>
              <li className="text-nav">
                <Link href="/">
                  <Image
                    src="/icons/user.svg"
                    alt="user icon"
                    height={15}
                    width={15}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <hr className="mt-4" />
      </header>
    </>
  );
};

export default Navbar;
