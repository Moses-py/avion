const Button = ({ fullwidth, variant, text, onclick, classname }: Button) => {
  return (
    <>
      <button
        onClick={onclick}
        className={`${fullwidth && "w-full"} ${
          (variant === "dark" &&
            "bg-dark-primary text-white hover:bg-primary") ||
          (variant === "light" &&
            "bg-white text-dark-primary hover:bg-border-gray") ||
          (variant === "gray" &&
            "bg-border-gray text-dark-primary hover:bg-dark-primary hover:text-white")
        } px-[2rem] py-[1rem] font-sans text-body-medium transition-all ease-in-out duration-500 whitespace-nowrap ${classname}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
