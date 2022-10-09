import { User } from "phosphor-react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";

export interface AvatarProps extends React.ComponentProps<typeof AvatarImage> {}

export const Avatar: React.FC<AvatarProps> = props => (
  <AvatarContainer>
    <AvatarImage {...props} />

    <AvatarFallback delayMs={600}>
      <User />
    </AvatarFallback>
  </AvatarContainer>
);
