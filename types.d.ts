type Button = {
  fullwidth?: boolean;
  variant: ButtonVariant;
  text: string;
  onclick?: () => void;
  classname?: string;
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
