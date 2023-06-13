import React from "react";
import Button from "../buttons/Button";

const TextInput = ({ buttonVariant, variant }: TextInput) => {
  return (
    <>
      <form>
        <div className="flex">
          <input
            type="text"
            placeholder="example@gmail.com"
            className={`${
              (variant === "light" &&
                "bg-milk placeholder:text-dark-primary") ||
              (variant === "dark" && "bg-primary placeholder:text-white")
            } w-full px-[1rem] ring-0 ring-gray-400 outline-none`}
          />
          <Button variant={buttonVariant} text={"Sign up"} />
        </div>
      </form>
    </>
  );
};

export default TextInput;
