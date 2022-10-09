import { Box, BoxProps, Text } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
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
};

export const Primary: StoryObj<BoxProps> = {};

export default meta;
