import { Button, ButtonProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight } from "phosphor-react";
import { Fragment } from "react";

const meta: Meta<ButtonProps> = {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
  },
  argTypes: {
    onClick: {
      action: "click",
    },
  },
};

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "Create new",
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
    children: "Cancel",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <Fragment>
        Próximo passo
        <ArrowRight weight="bold" />
      </Fragment>
    ),
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};

export default meta;
