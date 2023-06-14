import Button from "@/components/buttons/Button";
import Footer from "@/components/footer/Footer";
import Headline1 from "@/components/typography/Headline1";
import Headline3 from "@/components/typography/Headline3";
import { cart_data } from "@/mocks/_mocks_";
import Image from "next/image";

const page = () => {
  const subtotal = () => {
    let subtotal = 0;
    for (let item of cart_data) {
      const total = item.price * item.quantity;
      subtotal += total;
    }

    return subtotal;
  };
  return (
    <>
      <section className="py-[3rem] px-5">
        <div className="container font-serif">
          <Headline1 theme="dark">Your Shopping Cart</Headline1>

          <div className="my-[2rem]">
            {/* Items */}
            <div className="grid md:grid-cols-2 my-8 gap-[2rem]">
              {cart_data.map((data, index) => {
                return (
                  <>
                    <div className="flex gap-[1rem]" key={index}>
                      <div className="">
                        <Image
                          src={`/images/product/${data.image}.webp`}
                          alt={data.item_name}
                          width={110}
                          height={150}
                          className="object-contain w-[150px] h-[200px]"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div className="flex gap-[1rem] justify-between">
                          <h4 className="lg:text-headline-4 text-headline-5">
                            {data.item_name}
                          </h4>
                          <p className="text-body-small m-sm:text-body-medium font-sans">
                            ${data.price}
                          </p>
                        </div>

                        <p className="text-body-small m-sm:text-body-medium font-sans">
                          {data.desc}
                        </p>
                        <div className="flex gap-[1rem] justify-between">
                          <p className="text-body-small m-sm:text-body-medium font-sans">
                            {data.quantity}
                          </p>
                          <p className="text-body-small m-sm:text-body-medium font-sans">
                            Total: ${data.price * data.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

              {/* Second */}
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-end my-[2rem]">
              <div className="flex flex-col gap-3 text-right">
                <Headline3 theme="dark">Subtotal: ${subtotal()}</Headline3>
                <p className="text-body-small font-sans">
                  Taxes and shipping are calculated at checkout
                </p>
                <Button variant={"dark"} text={"Go to checkout"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
