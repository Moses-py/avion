const ParagraphText = ({ theme, classname, children }: Typography) => {
  return (
    <>
      <p
        className={`${classname} ${
          (theme === "dark" && "text-dark-primary") ||
          (theme === "light" && "text-white")
        } text-body-medium font-sans leading-global`}
      >
        {children}
      </p>
    </>
  );
};

export default ParagraphText;
