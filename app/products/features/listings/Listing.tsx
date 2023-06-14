"use client";
import ImageCard from "@/components/ImageCard/ImageCard";
import ProductFilter from "./ProductFilter";
import Button from "@/components/buttons/Button";
import { filters, listings } from "@/mocks/_mocks_";
import ProductFilterMobile from "./ProductFilterMobile";
import { useRouter } from "next/navigation";

const Listing = () => {
  const router = useRouter();
  return (
    <>
      <section className="w-full h-full ">
        <div className="block md:hidden mt-[2rem]">
          <ProductFilterMobile />
        </div>

        <div className="flex container py-[3rem]">
          {/* Aside */}
          <aside className="hidden md:block min-w-[300px] w-[300px] lg:w-[385px] h-full">
            <div className="px-5 flex justify-center">
              <div className="my-[1.5rem]">
                <ProductFilter category={filters} />
              </div>
            </div>
          </aside>
          {/* Listings */}
          <main className="w-full h-full md:pr-10">
            <div className="grid lg:grid-cols-3 m-sm:grid-cols-2 justify-items-center justify-center gap-x-[1rem] gap-y-[3rem]">
              {listings.map((listing, index) => {
                return (
                  <ImageCard
                    key={index}
                    image={listing.image}
                    name={listing.name}
                    price={listing.price}
                    onclick={() => router.push("/product")}
                  />
                );
              })}
            </div>
            <div className="flex justify-center items-center mt-[8rem]">
              <Button variant={"gray"} text={"Load more"} />
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Listing;
