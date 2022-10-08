import { styled } from "./styles";

const Button = styled("button", {
  fontFamily: "$DEFAULT",
  backgroundColor: "$ignite500",
  borderRadius: "$md",
  padding: "$4",
  height: "$10",
});

export const App: React.FC = () => <Button>Hello World</Button>;
