import React from "react";
import { Meta, Story } from "@storybook/react";
import { BtnProps, Button } from "./button";
import { SvgIconsMap } from "../../iconography/icons";

const disabledControls = [
  "startIcon",
  "children",
  "classes",
  "disableElevation",
  "disableFocusRipple",
  "endIcon",
  "sx",
  "tabIndex",
  "action",
  "centerRipple",
  "disableRipple",
  "disableTouchRipple",
  "onClick",
  "focusRipple",
  "focusVisibleClassName",
  "LinkComponent",
  "onFocusVisible",
  "TouchRippleProps",
  "touchRippleRef",
  "ref",
].reduce(
  (obj, i) => ({
    ...obj,
    [i]: {
      table: {
        disable: true,
      },
    },
  }),
  {},
);

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    leftIcon: {
      options: [...Object.keys(SvgIconsMap), undefined],
      control: { type: "select" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    onClick: {
      action: "clicked",
    },
    ...disabledControls,
  },
} as Meta;

const Template: Story<BtnProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Click",
  color: "primary",
  variant: "contained",
  leftIcon: "Add",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Click",
  color: "secondary",
  variant: "contained",
  leftIcon: "Alarm",
};
