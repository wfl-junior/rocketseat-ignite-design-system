import { Box, BoxProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react";

const meta: Meta<BoxProps> = {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <Fragment>
        <span>Testando o elemento Box.</span>
      </Fragment>
    ),
  },
};

export const Primary: StoryObj<BoxProps> = {};

export default meta;
