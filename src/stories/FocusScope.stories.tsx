import { ComponentMeta } from "@storybook/react";
import React from "react";
import { FocusScope } from "react-aria";

export default {
  title: "FocusScope",
  component: FocusScope,
} as ComponentMeta<typeof FocusScope>;

export const Primary = () => <FocusScope>a</FocusScope>;
