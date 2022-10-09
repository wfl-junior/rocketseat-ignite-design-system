import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text } from "@wfl-junior-ignite-design-system/react";
import { Fragment } from "react";

const meta: Meta<BoxProps> = {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <Fragment>
        <Text>Testando o elemento Box.</Text>
      </Fragment>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export const Primary: StoryObj<BoxProps> = {};

export default meta;
