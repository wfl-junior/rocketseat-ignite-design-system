import * as Avatar from "@radix-ui/react-avatar";
import { styled } from "../../styles";

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  aspectRatio: "1 / 1",
  width: "$12",
  overflow: "hidden",
});

export const AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

export const AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray800",

  svg: {
    aspectRatio: "1 / 1",
    width: "$6",
    color: "$gray100",
  },
});
