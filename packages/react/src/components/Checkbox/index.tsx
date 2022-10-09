import { Check } from "phosphor-react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxContainer> {}

export const Checkbox: React.FC<CheckboxProps> = props => (
  <CheckboxContainer {...props}>
    <CheckboxIndicator asChild>
      <Check weight="bold" />
    </CheckboxIndicator>
  </CheckboxContainer>
);

Checkbox.displayName = "Checkbox";
