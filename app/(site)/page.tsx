import Footer from "@/components/footer/Footer";
import Contact from "./features/contact/Contact";
import Feature from "./features/feature/Feature";
import Hero from "./features/hero/Hero";
import Newsletter from "./features/newsletter/Newsletter";

export const metadata = {
  title: "Avion | Home",
  description: "",
};

const page = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
