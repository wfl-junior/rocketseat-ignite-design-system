import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipProps } from "@wfl-junior-ignite-design-system/react";

const meta: Meta<TooltipProps> = {
  title: "Data Display/Tooltip",
  component: Tooltip,
  args: {
    message: "21 de Outubro - Indisponível",
  },
};

export const Primary: StoryObj<TooltipProps> = {};

export default meta;
