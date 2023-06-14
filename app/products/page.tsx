import Footer from "@/components/footer/Footer";
import Banner from "./features/hero/Banner";
import Listing from "./features/listings/Listing";

export const metadata = {
  title: "Avion | Products",
  description: "",
};

const page = () => {
  return (
    <>
      <Banner />
      <Listing />
      <Footer />
    </>
  );
};

export default page;
