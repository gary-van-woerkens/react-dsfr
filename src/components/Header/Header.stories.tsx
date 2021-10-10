import React from "react"
import { Story } from "@storybook/react"
import { Meta } from "@storybook/react/types-6-0"

import Header, { HeaderProps } from "./Header"
import Link from "../Link"

export default {
  component: Header,
  title: "Components/Header",
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Service = Template.bind({})
Service.args = { service: "My Application" }

export const Baseline = Template.bind({})
Baseline.args = { ...Service.args, baseline: "The design system demo" }

const TemplateChildren: Story<HeaderProps> = (args) => (
  <Header {...args}>
    <>
      <Link text="A link" href="#" action={true} size="small" />
      <Link
        href="#"
        size="small"
        action={true}
        text="Another link"
        iconCls="ri-home-2-line"
      />
      <Link
        href="#"
        size="small"
        action={true}
        text="Connexion"
        iconPosition="right"
        iconCls="ri-arrow-right-line"
      />
    </>
  </Header>
)
export const Links = TemplateChildren.bind({})
Links.args = { ...Baseline.args }
