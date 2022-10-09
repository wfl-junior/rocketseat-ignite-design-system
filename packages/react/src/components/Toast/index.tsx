import { X } from "phosphor-react";
import { CloseButton, Header, Message, Title, ToastContainer } from "./styles";

export interface ToastProps {
  title: string;
  message: string;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ title, message, onClose }) => (
  <ToastContainer>
    <Header>
      <Title as="strong">{title}</Title>

      <CloseButton onClick={onClose} title="Close">
        <X />
      </CloseButton>
    </Header>

    <Message>{message}</Message>
  </ToastContainer>
);
