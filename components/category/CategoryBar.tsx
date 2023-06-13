import Link from "next/link";

const category = [
  "All products",
  "Plant pots",
  "Ceramics",
  "Tables",
  "Chairs",
  "Crockery",
  "Tableware",
  "Cutlery",
];
const CategoryBar = () => {
  return (
    <>
      <section className="py-5 px-10 w-full hidden m-sm:block">
        <div className="flex md:justify-center items-center overflow-x-auto">
          <ul className="flex justify-start space-evenly items-center gap-[2rem]">
            {category.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-body-medium text-nav w-auto whitespace-nowrap"
                >
                  <Link href="">{item}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default CategoryBar;
