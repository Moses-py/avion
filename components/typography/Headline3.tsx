const Headline3 = ({ theme, classname, children }: Typography) => {
  return (
    <>
      <h3
        className={`${classname} ${
          (theme === "dark" && "text-dark-primary") ||
          (theme === "light" && "text-white")
        } md:text-headline-3 text-headline-4 font-serif leading-global`}
      >
        {children}
      </h3>
    </>
  );
};

export default Headline3;
