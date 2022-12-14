import type { Meta, StoryObj } from "@storybook/react";
import {
  Box,
  MultiStep,
  MultiStepProps,
} from "@wfl-junior-ignite-design-system/react";

const meta: Meta<MultiStepProps> = {
  title: "Form/MultiStep",
  component: MultiStep,
  args: {
    totalSteps: 4,
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
        {Story()}
      </Box>
    ),
  ],
};

export const Primary: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 1,
  },
};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};

export default meta;
