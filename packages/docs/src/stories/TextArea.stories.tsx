import { Box, Text, TextArea, TextAreaProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<TextAreaProps> = {
  title: "Form/Text Area",
  component: TextArea,
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
          Observations
        </Text>
        {Story()}
      </Box>
    ),
  ],
};

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Add any observations...",
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};

export default meta;
