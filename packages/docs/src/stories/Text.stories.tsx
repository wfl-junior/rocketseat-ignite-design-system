import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@wfl-junior-ignite-design-system/react";

const meta: Meta<TextProps> = {
  title: "Typography/Text",
  component: Text,
  args: {
    size: "md",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptatum placeat repudiandae dolore dignissimos voluptatem modi atque nihil velit! Dolorum asperiores impedit repellendus sequi modi quisquam ipsum qui quis nobis?",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
};

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text.",
    as: "strong",
  },
};

export default meta;
