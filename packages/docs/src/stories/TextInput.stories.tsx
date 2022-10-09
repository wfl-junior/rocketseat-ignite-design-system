import { Box, Text, TextInput, TextInputProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<TextInputProps> = {
  title: "Form/Text Input",
  component: TextInput,
  args: {
    id: "text-input",
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

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type your name...",
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com/",
  },
};

export default meta;
