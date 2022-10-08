import { styled } from "./styles";

export type ButtonProps = React.ComponentProps<typeof Button>;

export const Button = styled("button", {
  fontFamily: "$DEFAULT",
  backgroundColor: "$ignite300",
  borderRadius: "$md",
  height: "$10",
  fontWeight: "$bold",
  color: "$white",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    backgroundColor: "$ignite500",
  },

  variants: {
    size: {
      small: {
        fontSize: "$sm",
        padding: "$2 $4",
      },
      big: {
        fontSize: "$md",
        padding: "$3 $6",
      },
    },
  },

  defaultVariants: {
    size: "small",
  },
});
