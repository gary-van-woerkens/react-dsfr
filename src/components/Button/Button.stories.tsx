import React from "react";
import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Button label", size: "large" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false };

export const IconPrimary = Template.bind({});
IconPrimary.args = { ...Primary.args, iconCls: "ri-settings-3-line" };

export const IconSecondary = Template.bind({});
IconSecondary.args = { ...IconPrimary.args, primary: false };

export const IconRightPrimary = Template.bind({});
IconRightPrimary.args = { ...IconPrimary.args, iconPosition: "right" };

export const IconRightSecondary = Template.bind({});
IconRightSecondary.args = { ...IconRightPrimary.args, primary: false };

export const IconOnlyPrimary = Template.bind({});
IconOnlyPrimary.args = { size: "large", iconCls: "ri-settings-3-line" };

export const IconOnlySecondary = Template.bind({});
IconOnlySecondary.args = { ...IconOnlyPrimary.args, primary: false };
