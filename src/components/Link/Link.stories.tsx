import React from "react"
import { Story } from "@storybook/react"
import { Meta } from "@storybook/react/types-6-0"

import Link, { LinkProps } from "./Link"

export default {
  component: Link,
  title: "Components/Link",
} as Meta

const TextTemplate: Story<LinkProps> = (args) => (
  <div style={{ fontFamily: "Marianne", fontWeight: 400 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra euismod
    eget tempus nunc faucibus senectus <Link {...args} />. Suspendisse convallis
    malesuada mattis sed ut duis.
  </div>
)

export const Simple = TextTemplate.bind({})
Simple.args = { text: "diam amet amet", href: "#" }

export const External = TextTemplate.bind({})
External.args = { ...Simple.args, target: "_blank" }

const Template: Story<LinkProps> = (args) => <Link {...args} />

export const Action = Template.bind({})
Action.args = {
  href: "#",
  action: true,
  text: "Label lien",
}

export const ActionDisabled = Template.bind({})
ActionDisabled.args = {
  ...Action.args,
  disabled: true,
}

export const ActionIconLeft = Template.bind({})
ActionIconLeft.args = {
  ...Action.args,
  iconCls: "ri-arrow-left-line",
}

export const ActionIconRight = Template.bind({})
ActionIconRight.args = {
  ...Action.args,
  iconPosition: "right",
  iconCls: "ri-arrow-right-line",
}
