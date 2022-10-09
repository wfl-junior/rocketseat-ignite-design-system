import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@wfl-junior-ignite-design-system/react";

const meta: Meta<HeadingProps> = {
  title: "Typography/Heading",
  component: Heading,
  args: {
    size: "md",
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl", "4xl", "5xl", "6xl"],
      control: {
        type: "inline-radio",
      },
    },
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
