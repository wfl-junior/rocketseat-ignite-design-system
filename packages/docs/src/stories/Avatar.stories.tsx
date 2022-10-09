import { Avatar, AvatarProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

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
