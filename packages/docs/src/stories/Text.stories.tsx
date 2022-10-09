import { Text, TextProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<TextProps> = {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptatum placeat repudiandae dolore dignissimos voluptatem modi atque nihil velit! Dolorum asperiores impedit repellendus sequi modi quisquam ipsum qui quis nobis?",
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
