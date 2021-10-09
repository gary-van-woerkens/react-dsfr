import React from "react"
import { Story } from "@storybook/react"
import { Meta } from "@storybook/react/types-6-0"

import Header, { HeaderProps } from "./Header"

export default {
  component: Header,
  title: "Components/Header",
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const BrandOnly = Template.bind({})
BrandOnly.args = { title: "My Application" }
