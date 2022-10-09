import { Button, ButtonProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ButtonProps> = {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Enviar",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "small",
  },
};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: "big",
  },
};

export default meta;
