import { User } from "phosphor-react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarImage> {}

export const Avatar: React.FC<AvatarProps> = props => (
  <AvatarContainer>
    <AvatarImage {...props} />

    <AvatarFallback delayMs={600}>
      <User />
    </AvatarFallback>
  </AvatarContainer>
);

Avatar.displayName = "Avatar";
