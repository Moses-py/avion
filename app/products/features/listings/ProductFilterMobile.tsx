import Button from "@/components/buttons/Button";

const ProductFilterMobile = () => {
  return (
    <>
      <div className="container grid s:grid-cols-2 gap-[1rem] m-sm:px-0">
        <Button variant={"gray"} text={"Filters"} fullwidth />
        <Button variant={"gray"} text={"Sorting"} fullwidth />
      </div>
    </>
  );
};

export default ProductFilterMobile;
