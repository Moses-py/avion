type Button = {
  fullwidth?: boolean;
  variant: ButtonVariant;
  text: string;
  onclick?: () => void;
  classname?: string;
  caret?: boolean;
};

type TextInput = {
  fullwidth?: boolean;
  buttonVariant: ButtonVariant;
  variant: InputVariant;
};

type Typography = {
  theme: TypographyTheme;
  classname?: string;
  children: React.ReactNode;
};

type TypographyTheme = "dark" | "light";
type ButtonVariant = "dark" | "light" | "gray";
type InputVariant = "dark" | "light";

type ProductListingProps = {
  category: ListingProps[];
};
type ListingProps = {
  category: string;
  items: string[];
};
