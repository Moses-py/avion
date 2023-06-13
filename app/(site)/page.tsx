import CategoryBar from "@/components/category/CategoryBar";
import Hero from "@/features/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Feature from "@/features/feature/Feature";
import Newsletter from "@/features/newsletter/Newsletter";
import Footer from "@/components/footer/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CategoryBar />
      <Hero />
      <Feature />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default page;
