const Headline1 = ({ theme, classname, children }: Typography) => {
  return (
    <>
      <h1
        className={`${classname} ${
          (theme === "dark" && "text-dark-primary") ||
          (theme === "light" && "text-white")
        } lg:text-headline-1 md:text-headline-2 text-headline-3 font-serif leading-global`}
      >
        {children}
      </h1>
    </>
  );
};

export default Headline1;
