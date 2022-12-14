import type { Meta, StoryObj } from "@storybook/react";
import {
  Box,
  Text,
  TextArea,
  TextAreaProps,
} from "@wfl-junior-ignite-design-system/react";

const meta: Meta<TextAreaProps> = {
  title: "Form/Text Area",
  component: TextArea,
  args: {
    id: "text-area",
    disabled: false,
    placeholder: "Add any observations...",
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
        <Text size="sm" as="label" htmlFor="text-area">
          Observations
        </Text>
        {Story()}
      </Box>
    ),
  ],
};

export const Primary: StoryObj<TextAreaProps> = {};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};

export default meta;
