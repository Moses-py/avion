const Headline2 = ({ theme, classname, children }: Typography) => {
  return (
    <>
      <h2
        className={`${classname} ${
          (theme === "dark" && "text-dark-primary") ||
          (theme === "light" && "text-white")
        } lg:text-headline-2 md:text-headline-3 text-headline-4 font-serif leading-global`}
      >
        {children}
      </h2>
    </>
  );
};

export default Headline2;
