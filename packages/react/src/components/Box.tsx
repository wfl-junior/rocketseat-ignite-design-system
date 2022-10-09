import { styled } from "../styles";

export type BoxProps = React.ComponentProps<typeof Box>;

export const Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600",
});
