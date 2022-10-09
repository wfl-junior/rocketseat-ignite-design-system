import { Heading, HeadingProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<HeadingProps> = {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
};

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading.",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão o heading será um `h2`, mas podemos alterar isso com a propriedade `as`.",
      },
    },
  },
};

export default meta;
