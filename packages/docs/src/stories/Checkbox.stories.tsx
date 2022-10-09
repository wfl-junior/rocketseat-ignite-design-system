import { Box, Checkbox, CheckboxProps, Text } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<CheckboxProps> = {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {
    id: "checkbox",
  },
  decorators: [
    Story => (
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          gap: "$2",
        }}
      >
        {Story()}
        <Text
          size="sm"
          as="label"
          htmlFor="checkbox"
          css={{ cursor: "pointer" }}
        >
          Accept terms of use
        </Text>
      </Box>
    ),
  ],
};

export const Primary: StoryObj<CheckboxProps> = {
  args: {},
};

export default meta;
