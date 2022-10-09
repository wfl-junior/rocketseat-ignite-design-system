import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@wfl-junior-ignite-design-system/react";

const meta: Meta<AvatarProps> = {
  title: "Data Display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/wfl-junior.png",
    alt: "Wallace Júnior",
  },
};

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: "",
  },
};

export default meta;
