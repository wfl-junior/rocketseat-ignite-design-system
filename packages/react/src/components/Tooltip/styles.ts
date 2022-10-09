import { styled } from "../../styles";
import { Text } from "../Text";

export const TooltipContainer = styled("div", {
  padding: "$3 $4",
  borderRadius: "$sm",
  backgroundColor: "$gray900",
  width: "max-content",
  boxShadow: "0 4px 4px rgb(0 0 0 / 0.25)",
  position: "relative",

  "&::after": {
    boxSizing: "border-box",
    content: "",
    position: "absolute",
    aspectRatio: "1 / 1",
    width: "$2",
    border: "var(--space-2) solid transparent",
    borderTopColor: "$gray900",
    top: "100%",
    left: "50%",
    translate: "-50%",
  },
});

export const Message = styled(Text, {
  lineHeight: "$short",
  fontWeight: "$medium",

  defaultVariants: {
    size: "sm",
  },
});
