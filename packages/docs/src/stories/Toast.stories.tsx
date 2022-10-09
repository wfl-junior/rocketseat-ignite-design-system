import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProps } from "@wfl-junior-ignite-design-system/react";

const meta: Meta<ToastProps> = {
  title: "Data Display/Toast",
  component: Toast,
  args: {
    title: "Agendamento realizado",
    message: "Quarta-feira, 23 de Outubro às 16h",
  },
  argTypes: {
    onClose: {
      action: "click",
    },
  },
};

export const Primary: StoryObj<ToastProps> = {};

export default meta;
