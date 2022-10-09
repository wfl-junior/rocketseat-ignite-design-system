import { Message, TooltipContainer } from "./styles";

export interface TooltipProps {
  message: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ message }) => (
  <TooltipContainer>
    <Message as="span">{message}</Message>
  </TooltipContainer>
);

Tooltip.displayName = "Tooltip";
