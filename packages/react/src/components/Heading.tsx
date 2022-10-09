import { styled } from "../styles";
import { StitchesComponentProps } from "../types/StitchesComponentProps";

export interface HeadingProps extends StitchesComponentProps<typeof Heading> {}

export const Heading = styled("h2", {
  fontFamily: "$DEFAULT",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray100",

  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      xl: { fontSize: "$5xl" },
      "2xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" },
    },
  },

  defaultVariants: {
    size: "md",
  },
});

Heading.displayName = "Heading";
