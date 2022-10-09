import { styled } from "../../styles";
import { Heading } from "../Heading";
import { Text } from "../Text";

export const ToastContainer = styled("div", {
  width: "$80",
  padding: "$3 $5",
  borderRadius: "$sm",
  backgroundColor: "$gray800",
  border: "1px solid $gray600",
  boxShadow: "0 4px 4px rgb(0 0 0 / 0.25)",
});

export const Header = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "$2",
});

export const Title = styled(Heading, {
  color: "$white",
  lineHeight: "$base",
  wordBreak: "break-all",

  defaultVariants: {
    size: "sm",
  },
});

export const CloseButton = styled("button", {
  all: "unset",
  cursor: "pointer",
  color: "$gray200",
  aspectRatio: "1 / 1",
  width: "$5",
  transition: "color 200ms linear",
  flexShrink: 0,

  svg: {
    width: "100%",
    height: "100%",
  },

  "&:hover": {
    color: "$gray100",
  },
});

export const Message = styled(Text, {
  marginTop: "$1",
  color: "$gray200",

  defaultVariants: {
    size: "sm",
  },
});
