import { styled } from "../styles";
import { StitchesComponentProps } from "../types/StitchesComponentProps";

export interface ButtonProps extends StitchesComponentProps<typeof Button> {}

export const Button = styled("button", {
  all: "unset",
  cursor: "pointer",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$DEFAULT",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  padding: "0 $4",

  svg: {
    aspectRatio: "1 / 1",
    width: "$4",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$ignite500",
        transition: "background-color linear 200ms",

        "&:enabled:hover": {
          backgroundColor: "$ignite300",
        },

        "&:disabled": {
          backgroundColor: "$gray200",
        },
      },
      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",

        "&:enabled:hover": {
          backgroundColor: "$ignite500",
          color: "$white",
        },

        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200",
        },
      },
      tertiary: {
        color: "$gray100",

        "&:enabled:hover": {
          color: "$white",
        },

        "&:disabled": {
          color: "$gray600",
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
