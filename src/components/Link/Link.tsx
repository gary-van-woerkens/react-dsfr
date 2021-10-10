import React from "react"

import "./link.scss"

export interface LinkProps {
  text: string
  href: string
  action?: boolean
  iconCls?: string
  disabled?: boolean
  children?: JSX.Element
  iconPosition?: "left" | "right"
  size?: "small" | "medium" | "large"
  target?: "_self" | "_blank" | "_parent" | "_top"
}

const Link = ({
  text,
  href,
  iconCls,
  action = false,
  size = "medium",
  disabled = false,
  target = "_self",
  iconPosition = "left",
}: LinkProps): JSX.Element => {
  const classeNames = ["link", size]

  if (target === "_blank") {
    iconPosition = "right"
    iconCls = "ri-external-link-line"
  }

  if (action) classeNames.push("action")
  if (disabled) classeNames.push("disabled")
  if (iconCls) classeNames.push(`icon-${iconPosition}`)

  return (
    <>
      {action || iconCls ? (
        <div className={classeNames.join(" ")}>
          {iconPosition === "left" && <i className={iconCls}></i>}
          <a href={href} target={target}>
            {text}
          </a>
          {iconPosition === "right" && <i className={iconCls}></i>}
        </div>
      ) : (
        <a href={href} target={target} className={classeNames.join(" ")}>
          {text}
        </a>
      )}
    </>
  )
}

export default Link
