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

export const Service = Template.bind({})
Service.args = { service: "My Application" }

export const Baseline = Template.bind({})
Baseline.args = { ...Service.args, baseline: "The design system demo" }

const TemplateChildren: Story<HeaderProps> = (args) => (
  <Header {...args}>
    <>
      <a href="#">A link</a>
      <a href="#">Another link</a>
      <a href="#">Connexion</a>
    </>
  </Header>
)
export const Links = TemplateChildren.bind({})
Links.args = { ...Baseline.args }
