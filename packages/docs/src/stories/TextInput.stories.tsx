import type { Meta, StoryObj } from "@storybook/react";
import {
  Box,
  Text,
  TextInput,
  TextInputProps,
} from "@wfl-junior-ignite-design-system/react";

const meta: Meta<TextInputProps> = {
  title: "Form/Text Input",
  component: TextInput,
  args: {
    id: "text-input",
    disabled: false,
    placeholder: "Type your e-mail...",
  },
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    Story => (
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$2",
        }}
      >
        <Text size="sm" as="label" htmlFor="text-input">
          E-mail
        </Text>
        {Story()}
      </Box>
    ),
  ],
};

export const Primary: StoryObj<TextInputProps> = {};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com/",
    placeholder: "",
  },
};

export default meta;
