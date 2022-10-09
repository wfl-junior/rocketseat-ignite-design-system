import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps
  extends React.ComponentPropsWithoutRef<"input"> {
  prefix?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ prefix, ...props }) => (
  <TextInputContainer>
    {!!prefix && <Prefix>{prefix}</Prefix>}
    <Input {...props} />
  </TextInputContainer>
);
